"use client";

import * as React from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { useAppStore } from "@/stores/app-store";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  activities?: {
    title: string;
    age: string;
    duration: string;
    materials: string[];
    stepByStep: string[];
    skills: string[];
    questions: string[];
    easierVersion?: string;
    harderVersion?: string;
    safetyNotes?: string;
  }[];
}

const SUGGESTED_PROMPTS = [
  "What can I do with my 4-year-old today?",
  "My child loves dinosaurs. Give me a math activity.",
  "Give me a 20-minute activity using things at home.",
  "What's a good science experiment for a 6-year-old?",
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateMockResponse(_userMessage: string): Message {
  return {
    id: Date.now().toString(),
    role: "assistant",
    content: "Here's a personalized activity suggestion based on your request. Remember, every child develops at their own pace — focus on enjoying the process together.",
    timestamp: new Date(),
    activities: [
      {
        title: "Creative Learning Adventure",
        age: "3-7 years",
        duration: "20 minutes",
        materials: ["Paper", "Markers", "Household items"],
        stepByStep: [
          "Start by discussing the topic together",
          "Gather the materials",
          "Follow the child's lead and explore",
          "Ask open-ended questions throughout",
          "Celebrate their efforts"
        ],
        skills: ["COGNITIVE", "CREATIVITY", "LANGUAGE"],
        questions: [
          "What do you think about this?",
          "Can you tell me more about your idea?",
          "What would happen if we tried differently?"
        ],
        easierVersion: "Simplify by focusing on one step at a time",
        harderVersion: "Add more complexity or combine with other skills"
      }
    ]
  };
}

export default function AssistantPage() {
  const { selectedChild } = useAppStore();
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I can help you find activities for your child. Tell me about their age, interests, or what kind of activity you're looking for.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const response = generateMockResponse(input);
    setMessages((prev) => [...prev, response]);
    setIsTyping(false);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-6rem)] lg:h-[calc(100vh-3.5rem)]">
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-neutral-900 tracking-tight">AI Assistant</h1>
          <p className="text-sm text-neutral-500">
            Ask about activities for{selectedChild ? ` ${selectedChild.name}` : " your child"}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn("flex gap-3", message.role === "user" ? "justify-end" : "justify-start")}
            >
              {message.role === "assistant" && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-900">
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
              )}
              <div className={cn("max-w-[80%] space-y-2", message.role === "user" && "order-first")}>
                <div
                  className={cn(
                    "rounded-xl px-3.5 py-2.5 text-sm",
                    message.role === "user"
                      ? "bg-neutral-900 text-white rounded-br-sm"
                      : "bg-neutral-100 text-neutral-900 rounded-bl-sm"
                  )}
                >
                  {message.content}
                </div>

                {message.activities?.map((activity, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 space-y-3">
                      <h3 className="font-semibold text-sm text-neutral-900">{activity.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="text-[10px]">{activity.age}</Badge>
                        <Badge variant="secondary" className="text-[10px]">{activity.duration}</Badge>
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide mb-1">Materials</p>
                        <div className="flex flex-wrap gap-1">
                          {activity.materials.map((m, i) => (
                            <Badge key={i} variant="outline" className="text-[10px]">{m}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide mb-1">Steps</p>
                        <ol className="space-y-1">
                          {activity.stepByStep.map((step, i) => (
                            <li key={i} className="flex gap-2 text-xs text-neutral-600">
                              <span className="font-medium text-neutral-400">{i + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide mb-1">Ask your child</p>
                        <ul className="space-y-1">
                          {activity.questions.map((q, i) => (
                            <li key={i} className="text-xs text-neutral-500">{q}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        {activity.easierVersion && (
                          <div className="flex-1 rounded-lg bg-green-50 p-2 text-[11px] text-green-700">
                            <strong>Easier:</strong> {activity.easierVersion}
                          </div>
                        )}
                        {activity.harderVersion && (
                          <div className="flex-1 rounded-lg bg-amber-50 p-2 text-[11px] text-amber-700">
                            <strong>Harder:</strong> {activity.harderVersion}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {message.role === "user" && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-200">
                  <User className="h-3.5 w-3.5 text-neutral-600" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-900">
                <Bot className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="rounded-xl bg-neutral-100 px-3.5 py-2.5">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {messages.length <= 1 && (
          <div className="mb-4">
            <p className="mb-2 text-[10px] font-medium text-neutral-400 uppercase tracking-wide">Try asking</p>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setInput(prompt)}
                  className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600 transition-colors hover:bg-neutral-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2 border-t border-neutral-200 pt-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            placeholder="Ask about activities, skills, age groups..."
            className="flex-1 rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm transition-colors focus:border-neutral-400 focus:outline-none placeholder:text-neutral-400"
          />
          <Button onClick={handleSend} disabled={!input.trim() || isTyping} size="sm" className="px-4">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
