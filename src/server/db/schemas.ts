import { z } from "zod";

/**
 * Zod schemas describe the SHAPE of documents written to / read from MongoDB.
 * Inferred TypeScript types live in `./models.ts`.
 */

export const RoleSchema = z.enum(["user", "assistant"]);

export const MessageSchema = z.object({
  role: RoleSchema,
  content: z.string(),
  createdAt: z.date(),
});

export const FitReportSchema = z.object({
  fitScore: z.number().int().min(0).max(100),
  topMatches: z.array(z.string()).min(2).max(4),
  gaps: z.array(z.string()).min(1).max(3),
  summary: z.string(),
});

const BaseMetaSchema = z.object({
  sessionId: z.string().min(1),
  ipHash: z.string(),
  userAgent: z.string(),
  referrer: z.string(),
});

export const AskLogSchema = BaseMetaSchema.extend({
  type: z.literal("ask"),
  messages: z.array(MessageSchema),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const QualifyLogSchema = BaseMetaSchema.extend({
  type: z.literal("qualify"),
  jobDescription: z.string(),
  jdHash: z.string(),
  fitReport: FitReportSchema,
  createdAt: z.date(),
});

export const ChatLogSchema = z.discriminatedUnion("type", [
  AskLogSchema,
  QualifyLogSchema,
]);
