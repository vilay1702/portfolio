import { z } from "zod";
import {
  AskLogSchema,
  ChatLogSchema,
  FitReportSchema,
  MessageSchema,
  QualifyLogSchema,
  RoleSchema,
} from "./schemas";

/**
 * TypeScript types inferred from the zod schemas in `./schemas.ts`.
 * Import these anywhere you need to reference the shape of a document.
 */

export type Role = z.infer<typeof RoleSchema>;
export type Message = z.infer<typeof MessageSchema>;
export type FitReport = z.infer<typeof FitReportSchema>;
export type AskLog = z.infer<typeof AskLogSchema>;
export type QualifyLog = z.infer<typeof QualifyLogSchema>;
export type ChatLog = z.infer<typeof ChatLogSchema>;

export const CHAT_LOGS_COLLECTION = "chat_logs";
