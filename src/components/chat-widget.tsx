"use client";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircleIcon, SendIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const chatTransport = new DefaultChatTransport({ api: "/api/chat" });

export function ChatWidget() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, error, stop } = useChat({
    id: "cupping-visitor-chat",
    transport: chatTransport,
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen, status]);

  const handleSubmit = async (input: string) => {
    if (!input.trim() || isLoading) return;
    await sendMessage({ text: input.trim() });
  };

  const emptyStateTitle = t("Comment puis-je vous aider ?", "How can I help?");
  const emptyStateDescription = t(
    "Posez-moi vos questions sur les ventouses.",
    "Ask me anything about cupping therapy."
  );
  const placeholder = t(
    "Écrivez votre question…",
    "Type your question…"
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat panel */}
      <div
        className={cn(
          "w-[min(92vw,380px)] origin-bottom-right rounded-3xl bg-card shadow-2xl ring-1 ring-border transition-all duration-300 ease-out",
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-3xl bg-brand-dark px-5 py-4 text-brand-cream">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="size-9 rounded-full bg-brand-clay/20 flex items-center justify-center">
                <MessageCircleIcon className="size-4 text-brand-clay" />
              </div>
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-brand-sage ring-2 ring-brand-dark" />
            </div>
            <div>
              <p className="text-sm font-medium">{t("Assistant bien-être", "Wellness Assistant")}</p>
              <p className="text-[10px] opacity-70">
                {t("Répond en français & anglais", "Replies in French & English")}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsOpen(false)}
            className="text-brand-cream hover:bg-brand-cream/10"
          >
            <XIcon className="size-4" />
          </Button>
        </div>

        {/* Messages */}
        <Conversation className="h-[380px]">
          <ConversationContent>
            {messages.length === 0 ? (
              <ConversationEmptyState
                title={emptyStateTitle}
                description={emptyStateDescription}
              />
            ) : (
              messages.map((message) => (
                <Message key={message.id} from={message.role}>
                  <MessageContent>
                    <MessageResponse>{message.parts
                      .filter((part) => part.type === "text")
                      .map((part) => part.text)
                      .join("")}</MessageResponse>
                  </MessageContent>
                </Message>
              ))
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        {/* Error */}
        {error && (
          <div className="px-4 py-2 text-xs text-destructive bg-destructive/10">
            {t(
              "Une erreur est survenue. Veuillez réessayer.",
              "An error occurred. Please try again."
            )}
          </div>
        )}

        {/* Input */}
        <div className="border-t border-border p-3">
          <PromptInput
            onSubmit={async ({ text }) => {
              await handleSubmit(text);
            }}
          >
            <PromptInputTextarea
              ref={textareaRef}
              placeholder={placeholder}
              disabled={isLoading}
              className="min-h-[60px] resize-none bg-transparent text-sm placeholder:text-muted-foreground"
            />
            <PromptInputFooter className="justify-end pt-2">
              <PromptInputSubmit
                status={status}
                onStop={stop}
                disabled={isLoading}
                className="bg-brand-clay text-brand-cream hover:bg-brand-clay/90"
              >
                <SendIcon className="size-4" />
              </PromptInputSubmit>
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>

      {/* Toggle button */}
      <Button
        type="button"
        aria-label={isOpen ? t("Fermer le chat", "Close chat") : t("Ouvrir le chat", "Open chat")}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "size-14 rounded-full shadow-xl transition-all duration-300 hover:scale-105",
          isOpen
            ? "bg-muted text-foreground hover:bg-muted/90"
            : "bg-brand-dark text-brand-cream hover:bg-brand-dark/90"
        )}
      >
        {isOpen ? (
          <XIcon className="size-5" />
        ) : (
          <MessageCircleIcon className="size-5" />
        )}
      </Button>
    </div>
  );
}
