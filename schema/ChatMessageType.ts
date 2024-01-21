export type ChatMessageType = {
  content: string;
  role: "human" | "ai";
  runId?: string;
  traceUrl?: string;
}