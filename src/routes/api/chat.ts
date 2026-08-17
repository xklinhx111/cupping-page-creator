import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

type ChatRequestBody = { messages?: unknown };

const SYSTEM_PROMPT = `You are a warm, knowledgeable assistant for a cupping therapy (ventouses) wellness practice.

Your role:
- Answer visitor questions about cupping therapy in a calm, reassuring tone.
- Explain the benefits (tension relief, improved circulation, lymphatic drainage, relaxation, athletic recovery).
- Address common concerns (does it hurt, how long marks last, contraindications, what to expect).
- Guide interested visitors toward booking a session.
- Never diagnose medical conditions or make unsupported health claims.
- Keep responses concise and conversational.
- Respond in the same language the visitor is using (French or English).`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env['LOVABLE_API_KEY'];
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const gateway = createLovableAiGatewayProvider(key);
        const model = gateway("google/gemini-3.6-flash");
        const result = streamText({
          model,
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages as UIMessage[]),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
        });
      },
    },
  },
});
