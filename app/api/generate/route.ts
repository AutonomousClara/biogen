import { NextRequest, NextResponse } from "next/server";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// Este endpoint é opcional - a chamada é feita diretamente do client
// Mas pode ser usado como proxy se necessário no futuro

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { apiKey: bodyApiKey, messages } = body;
    
    // Usa a key do servidor se disponível, senão usa a do body (BYOK)
    const apiKey = process.env.GROQ_API_KEY || bodyApiKey;

    if (!apiKey || !messages) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages,
        max_tokens: 200,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: "API request failed", details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
