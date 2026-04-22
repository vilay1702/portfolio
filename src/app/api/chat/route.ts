import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, UIMessage } from "ai";
import { ASK_SYSTEM_PROMPT } from "../../../server/portfolio-context";
import {
  extractRequestMeta,
  logAskAssistantMessage,
  logAskUserMessage,
} from "../../../server/db";

export const maxDuration = 30;
export const runtime = "nodejs";

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

const getLastUserText = (messages: UIMessage[]): string => {
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i];
    if (m.role !== "user") continue;
    return (m.parts || [])
      .filter(
        (p): p is { type: "text"; text: string } =>
          p.type === "text" && typeof (p as { text?: string }).text === "string"
      )
      .map((p) => p.text)
      .join("");
  }
  return "";
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, sessionId }: { messages: UIMessage[]; sessionId?: string } =
      body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Missing messages." }, { status: 400 });
    }
    if (messages.length > MAX_MESSAGES) {
      return Response.json(
        { error: "Conversation too long. Start a new chat." },
        { status: 400 }
      );
    }
    for (const m of messages) {
      const textParts = (m.parts || []).filter(
        (p): p is { type: "text"; text: string } => p.type === "text"
      );
      const total = textParts.reduce((n, p) => n + p.text.length, 0);
      if (total > MAX_MESSAGE_LENGTH) {
        return Response.json(
          { error: "Message too long. Keep it under 2000 characters." },
          { status: 400 }
        );
      }
    }

    const effectiveSessionId =
      sessionId && sessionId.length > 0 ? sessionId : crypto.randomUUID();
    const meta = extractRequestMeta(req, effectiveSessionId);

    const userText = getLastUserText(messages);
    if (userText) {
      await logAskUserMessage(meta, userText);
    }

    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: ASK_SYSTEM_PROMPT,
      messages: modelMessages,
      maxOutputTokens: 600,
      temperature: 0.5,
      onFinish: async ({ text }) => {
        if (text) {
          await logAskAssistantMessage(meta, text);
        }
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("/api/chat error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
