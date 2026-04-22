import { createHash } from "crypto";
import { getDb } from "./mongodb";
import {
  AskLog,
  CHAT_LOGS_COLLECTION,
  FitReport,
  QualifyLog,
} from "./models";

const IP_HASH_SALT = process.env.IP_HASH_SALT || "vilay-portfolio-default-salt";

export interface RequestMeta {
  sessionId: string;
  ip: string | null;
  userAgent: string | null;
  referrer: string | null;
}

const trimTo = (s: string | null, max: number) => (s || "").slice(0, max);

const hash = (input: string) =>
  createHash("sha256").update(input).digest("hex");

export function extractRequestMeta(
  req: Request,
  sessionId: string
): RequestMeta {
  const fwd = req.headers.get("x-forwarded-for");
  const ip = fwd ? fwd.split(",")[0].trim() : req.headers.get("x-real-ip");
  return {
    sessionId,
    ip,
    userAgent: req.headers.get("user-agent"),
    referrer: req.headers.get("referer"),
  };
}

function buildMeta(meta: RequestMeta) {
  return {
    sessionId: meta.sessionId,
    ipHash: meta.ip ? hash(meta.ip + IP_HASH_SALT) : "unknown",
    userAgent: trimTo(meta.userAgent, 300),
    referrer: trimTo(meta.referrer, 300),
  };
}

export async function logAskUserMessage(
  meta: RequestMeta,
  content: string
): Promise<void> {
  try {
    const db = await getDb();
    const now = new Date();
    await db.collection<AskLog>(CHAT_LOGS_COLLECTION).updateOne(
      { type: "ask", sessionId: meta.sessionId },
      {
        $setOnInsert: {
          type: "ask",
          ...buildMeta(meta),
          messages: [],
          createdAt: now,
        },
        $set: { updatedAt: now },
        $push: {
          messages: { role: "user", content, createdAt: now },
        },
      },
      { upsert: true }
    );
  } catch (err) {
    console.error("logAskUserMessage failed:", err);
  }
}

export async function logAskAssistantMessage(
  meta: RequestMeta,
  content: string
): Promise<void> {
  try {
    const db = await getDb();
    const now = new Date();
    await db.collection<AskLog>(CHAT_LOGS_COLLECTION).updateOne(
      { type: "ask", sessionId: meta.sessionId },
      {
        $set: { updatedAt: now },
        $push: {
          messages: { role: "assistant", content, createdAt: now },
        },
      }
    );
  } catch (err) {
    console.error("logAskAssistantMessage failed:", err);
  }
}

export async function logQualify(
  meta: RequestMeta,
  jobDescription: string,
  fitReport: FitReport
): Promise<void> {
  try {
    const db = await getDb();
    const doc: QualifyLog = {
      type: "qualify",
      ...buildMeta(meta),
      jobDescription,
      jdHash: hash(jobDescription.trim().toLowerCase()),
      fitReport,
      createdAt: new Date(),
    };
    await db.collection<QualifyLog>(CHAT_LOGS_COLLECTION).insertOne(doc);
  } catch (err) {
    console.error("logQualify failed:", err);
  }
}

/**
 * Create recommended indexes. Safe to call repeatedly; MongoDB skips existing ones.
 */
export async function ensureIndexes(): Promise<void> {
  const db = await getDb();
  const col = db.collection(CHAT_LOGS_COLLECTION);
  await col.createIndex({ sessionId: 1, type: 1 });
  await col.createIndex({ createdAt: -1 });
  await col.createIndex({ ipHash: 1, createdAt: -1 });
  await col.createIndex({ type: 1, createdAt: -1 });
}
