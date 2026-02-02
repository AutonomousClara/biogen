import { getSystemPrompt, getUserPrompt, Network, Vibe } from "./prompts";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export interface BioParams {
  apiKey: string;
  network: Network;
  name: string;
  profession: string;
  traits: string;
  vibe: Vibe;
}

export interface GenerateResult {
  success: boolean;
  bio?: string;
  error?: string;
}

export async function generateBio(params: BioParams): Promise<GenerateResult> {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${params.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: getSystemPrompt(params.network, params.vibe),
          },
          {
            role: "user",
            content: getUserPrompt(params),
          },
        ],
        max_tokens: 200,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        return {
          success: false,
          error: "Chave de API inválida. Verifique e tente novamente.",
        };
      }
      if (response.status === 429) {
        return {
          success: false,
          error: "Muitas requisições. Aguarde um momento.",
        };
      }
      return {
        success: false,
        error: "Algo deu errado. Tente novamente.",
      };
    }

    const data = await response.json();
    const bio = data.choices?.[0]?.message?.content?.trim();

    if (!bio) {
      return {
        success: false,
        error: "Não foi possível gerar a bio. Tente novamente.",
      };
    }

    return {
      success: true,
      bio,
    };
  } catch (error) {
    return {
      success: false,
      error: "Sem conexão. Verifique sua internet.",
    };
  }
}
