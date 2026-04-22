import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { QUALIFY_SYSTEM_PROMPT } from "../../../server/portfolio-context";
import {
  extractRequestMeta,
  FitReportSchema,
  logQualify,
} from "../../../server/db";

export const maxDuration = 30;
export const runtime = "nodejs";

const MAX_JD_LENGTH = 6000;

export async function POST(req: Request) {
  try {
    const { jobDescription, sessionId } = await req.json();

    if (typeof jobDescription !== "string" || jobDescription.trim().length < 40) {
      return Response.json(
        { error: "Please paste a full job description (at least 40 characters)." },
        { status: 400 }
      );
    }
    if (jobDescription.length > MAX_JD_LENGTH) {
      return Response.json(
        { error: `Job description is too long (max ${MAX_JD_LENGTH} characters).` },
        { status: 400 }
      );
    }

    const effectiveSessionId =
      typeof sessionId === "string" && sessionId.length > 0
        ? sessionId
        : crypto.randomUUID();
    const meta = extractRequestMeta(req, effectiveSessionId);

    const { object } = await generateObject({
      model: openai("gpt-4o-mini"),
      schema: FitReportSchema,
      system: QUALIFY_SYSTEM_PROMPT,
      prompt: `Evaluate Vilay's fit for the job description below. Score honestly.\n\n<job_description>\n${jobDescription}\n</job_description>`,
      temperature: 0.2,
    });

    await logQualify(meta, jobDescription, object);

    return Response.json(object);
  } catch (err) {
    console.error("/api/qualify error:", err);
    return Response.json(
      { error: "Could not generate a fit report. Please try again." },
      { status: 500 }
    );
  }
}
