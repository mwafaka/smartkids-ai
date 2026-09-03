import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateAIResponse } from "@/lib/ai-service";

const chatSchema = z.object({
  message: z.string().min(1).max(500),
  childId: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = chatSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const response = await generateAIResponse(
      parsed.data.message,
      undefined,
      apiKey
    );

    return NextResponse.json(response);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
