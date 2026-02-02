import { NextResponse } from "next/server";

// Endpoint para verificar se o servidor tem API key configurada
export async function GET() {
  const hasServerKey = !!process.env.GROQ_API_KEY;
  return NextResponse.json({ hasServerKey });
}
