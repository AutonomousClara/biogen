export type Network = "instagram" | "linkedin" | "twitter" | "tinder";
export type Vibe = "casual" | "professional" | "creative" | "mysterious" | "funny";

interface PromptParams {
  network: Network;
  vibe: Vibe;
  name: string;
  profession: string;
  traits: string;
}

const networkLimits: Record<Network, number> = {
  instagram: 150,
  linkedin: 300,
  twitter: 160,
  tinder: 500,
};

const networkInstructions: Record<Network, string> = {
  instagram: `
- Máximo 150 caracteres
- Use 1-2 emojis relevantes
- Pode incluir localização curta
- Não use hashtags
- Quebre em linhas curtas se fizer sentido`,
  linkedin: `
- Máximo 300 caracteres
- Tom profissional mas humano
- Mencione experiência/expertise
- Não use emojis demais (1 no máximo)
- Foque em valor que entrega`,
  twitter: `
- Máximo 160 caracteres
- Pode ser mais direto e informal
- 1-2 emojis ok
- Pode ter um pouco de humor
- Breve e impactante`,
  tinder: `
- Máximo 500 caracteres
- Personalidade é mais importante que currículo
- Pode ser mais pessoal e divertido
- Mencione hobbies/interesses
- 2-3 emojis ok
- Pode incluir altura se fizer sentido`,
};

const vibeInstructions: Record<Vibe, string> = {
  casual: "Tom leve, amigável e autêntico. Como se estivesse conversando com um amigo.",
  professional: "Tom profissional mas não robótico. Transmita credibilidade com humanidade.",
  creative: "Tom artístico e único. Use linguagem criativa e expressiva. Surpreenda.",
  mysterious: "Tom intrigante e enigmático. Deixe curiosidade no ar. Menos é mais.",
  funny: "Tom bem-humorado e divertido. Use humor inteligente, não piadas forçadas.",
};

export function getSystemPrompt(network: Network, vibe: Vibe): string {
  return `Você é um especialista em criar bios impactantes para redes sociais.

REDE SOCIAL: ${network.toUpperCase()}
${networkInstructions[network]}

TOM/VIBE: ${vibe.toUpperCase()}
${vibeInstructions[vibe]}

REGRAS GERAIS:
- Responda APENAS com a bio, nada mais
- Seja autêntico e único
- Evite clichês e frases genéricas
- Adapte a linguagem para pt-BR
- Não inclua aspas na resposta`;
}

export function getUserPrompt(params: PromptParams): string {
  return `Crie uma bio para ${params.name}.

Profissão/Ocupação: ${params.profession}
Personalidade/Interesses: ${params.traits}

Lembre: máximo ${networkLimits[params.network]} caracteres. Responda apenas com a bio.`;
}
