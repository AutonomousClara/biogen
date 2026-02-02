# CLAUDE.md - BioGen

## Missão
Criar o BioGen: um produto que gera bios personalizadas para redes sociais. Foco em UX e experiência de produto, não só funcionalidade.

## Filosofia
**Isso é um PRODUTO, não uma ferramenta técnica.**
- A primeira impressão importa
- Onboarding antes de pedir qualquer coisa técnica
- Mostrar valor antes de pedir compromisso
- Cada tela deve encantar

## Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **API:** Groq (compatível com OpenAI, tier grátis)
- **Deploy:** Vercel
- **Linguagem:** TypeScript

## Fluxo de Telas

### Tela 1: Landing Page (/)
A primeira coisa que o usuário vê. Deve vender o produto.

**Estrutura:**
```
┌─────────────────────────────────────────────────────┐
│  Logo: BioGen ✨                                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│     Crie sua bio perfeita                          │
│        em segundos ✨                               │
│                                                     │
│  Bios personalizadas para Instagram, LinkedIn,      │
│  Twitter, Tinder e mais. Powered by AI.            │
│                                                     │
│         [ 🚀 Criar minha bio ]                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│  EXEMPLOS (carrossel ou grid)                       │
│                                                     │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐│
│  │ 📸 Instagram │ │ 💼 LinkedIn  │ │ 🔥 Tinder    ││
│  │              │ │              │ │              ││
│  │ "Designer    │ │ "Product     │ │ "Amante de   ││
│  │ apaixonada   │ │ Manager com  │ │ café, dogs   ││
│  │ por café..." │ │ 10+ anos..." │ │ e trilhas"   ││
│  └──────────────┘ └──────────────┘ └──────────────┘│
│                                                     │
├─────────────────────────────────────────────────────┤
│  POR QUE BIOGEN?                                    │
│                                                     │
│  ⚡ Rápido      🎨 Personalizado   🔄 Variações    │
│  Em segundos    Do seu jeito       Não gostou?     │
│                                     Gere outra!    │
│                                                     │
├─────────────────────────────────────────────────────┤
│  100% Grátis • Seus dados ficam com você           │
│  Feito com 💜 por Clara                            │
└─────────────────────────────────────────────────────┘
```

**Componentes:**
- Hero com título e subtítulo
- CTA principal (botão grande e chamativo)
- Grid/carrossel de exemplos de bios
- Seção de benefícios (3 cards)
- Footer simples

### Tela 2: Onboarding (/start)
Após clicar "Criar minha bio". Explica o BYOK de forma amigável.

**Estrutura:**
```
┌─────────────────────────────────────────────────────┐
│  ← Voltar                              Passo 1 de 2 │
├─────────────────────────────────────────────────────┤
│                                                     │
│     Antes de começar... 🔑                         │
│                                                     │
│  O BioGen usa IA para criar suas bios.             │
│  Para funcionar, você precisa de uma chave         │
│  de API gratuita da Groq.                          │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │  📝 Como conseguir (leva 1 minuto):           │ │
│  │                                               │ │
│  │  1. Acesse console.groq.com                   │ │
│  │  2. Crie uma conta gratuita                   │ │
│  │  3. Vá em "API Keys" e crie uma nova         │ │
│  │  4. Copie e cole aqui embaixo                │ │
│  │                                               │ │
│  │  [ Abrir Groq Console ↗ ]                    │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  Sua API Key:                                       │
│  ┌───────────────────────────────────────────────┐ │
│  │ gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx          │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  🔒 Sua chave fica salva apenas no seu navegador.  │
│     Nós nunca a vemos ou armazenamos.              │
│                                                     │
│              [ Continuar → ]                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Detalhes:**
- Tom amigável, não técnico
- Explica o "porquê" antes do "como"
- Link direto para o console da Groq
- Botão só habilita quando key é válida (começa com `gsk_`)
- Salva no localStorage

### Tela 3: Criar Bio (/create)
O formulário principal. Deve ser divertido de preencher.

**Estrutura:**
```
┌─────────────────────────────────────────────────────┐
│  BioGen ✨                            [⚙️ Config]   │
├─────────────────────────────────────────────────────┤
│                                                     │
│     Conta um pouco sobre você 😊                   │
│                                                     │
│  Para qual rede?                                    │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐      │
│  │   📸   │ │   💼   │ │   🐦   │ │   🔥   │      │
│  │Instagr.│ │LinkedIn│ │Twitter │ │ Tinder │      │
│  └────────┘ └────────┘ └────────┘ └────────┘      │
│                                                     │
│  Seu nome (ou apelido):                            │
│  ┌───────────────────────────────────────────────┐ │
│  │ Maria                                         │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  O que você faz?                                    │
│  ┌───────────────────────────────────────────────┐ │
│  │ Designer de produto                           │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  3 coisas que te definem:                          │
│  ┌───────────────────────────────────────────────┐ │
│  │ café, viagens, cachorros                      │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  Qual vibe?                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │😊 Casual │ │💼 Profis.│ │✨ Criativo│           │
│  └──────────┘ └──────────┘ └──────────┘           │
│  ┌──────────┐ ┌──────────┐                         │
│  │😏 Mister.│ │😂 Engra. │                         │
│  └──────────┘ └──────────┘                         │
│                                                     │
│            [ ✨ Gerar minha bio ]                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Campos:**
- Rede social (seleção visual com ícones)
- Nome/apelido (texto curto)
- O que faz (texto curto)
- 3 coisas que definem (texto, separado por vírgula)
- Vibe/tom (seleção visual): Casual, Profissional, Criativo, Misterioso, Engraçado

**Validação:**
- Todos os campos são obrigatórios
- Botão desabilitado até preencher tudo

### Tela 4: Resultado (/create - mesmo URL, estado diferente)
Mostra a bio gerada com opções.

**Estrutura:**
```
┌─────────────────────────────────────────────────────┐
│  BioGen ✨                                          │
├─────────────────────────────────────────────────────┤
│                                                     │
│     Sua bio ficou pronta! 🎉                       │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │                                               │ │
│  │  ☕ Designer apaixonada por criar             │ │
│  │  experiências incríveis. Movida a café       │ │
│  │  e boas histórias. Mãe de 2 dogs 🐕          │ │
│  │  Próxima parada: algum lugar novo ✈️         │ │
│  │                                               │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│     [ 📋 Copiar ]    [ 🔄 Gerar outra ]            │
│                                                     │
│  ──────────────────────────────────────────────── │
│                                                     │
│     [ ← Começar de novo ]                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Ações:**
- **Copiar:** Copia para clipboard, mostra toast "Copiado!"
- **Gerar outra:** Chama API novamente com mesmos dados
- **Começar de novo:** Volta para o formulário limpo

## Design

### Visual
- Dark mode (bg-gray-950)
- Gradientes purple/pink nos destaques (consistente com site Clara)
- Cards com glassmorphism sutil
- Animações suaves (fade-in, scale)
- Emojis como parte do design (não decoração)

### Cores principais
```css
--purple-500: #a855f7
--pink-500: #ec4899
--gray-950: #030712
--gray-900: #111827
--gray-800: #1f2937
```

### Tipografia
- Títulos: Bold, grandes
- Corpo: Regular, legível
- Font: System font stack (rápido)

### Responsivo
- Mobile-first
- Tudo funciona bem em telas pequenas
- Cards empilham no mobile

## Estrutura de Arquivos

```
biogen/
├── app/
│   ├── layout.tsx          # Root layout, metadata
│   ├── page.tsx             # Landing page
│   ├── start/
│   │   └── page.tsx         # Onboarding (API key)
│   ├── create/
│   │   └── page.tsx         # Form + Result
│   ├── api/
│   │   └── generate/
│   │       └── route.ts     # API route para Groq
│   └── globals.css
├── components/
│   ├── ui/                  # Componentes genéricos
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Toast.tsx
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── Examples.tsx
│   │   └── Benefits.tsx
│   ├── onboarding/
│   │   └── ApiKeySetup.tsx
│   ├── create/
│   │   ├── NetworkSelector.tsx
│   │   ├── VibeSelector.tsx
│   │   ├── BioForm.tsx
│   │   └── BioResult.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── lib/
│   ├── groq.ts              # API calls
│   ├── storage.ts           # localStorage
│   └── prompts.ts           # Prompts por rede/vibe
├── public/
│   └── og-image.png         # Open Graph image
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## API Groq

### Endpoint
POST `/api/generate`

### Request
```json
{
  "apiKey": "gsk_xxx",
  "network": "instagram",
  "name": "Maria",
  "profession": "Designer de produto",
  "traits": "café, viagens, cachorros",
  "vibe": "casual"
}
```

### Response
```json
{
  "bio": "☕ Designer apaixonada por criar experiências incríveis..."
}
```

### Implementação (lib/groq.ts)
```typescript
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

export async function generateBio(params: BioParams): Promise<string> {
  const response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${params.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: getSystemPrompt(params.network, params.vibe) },
        { role: "user", content: getUserPrompt(params) }
      ],
      max_tokens: 200,
      temperature: 0.8,
    })
  })
  
  // ... handle response
}
```

### Prompts (lib/prompts.ts)
Criar prompts específicos para cada combinação de rede + vibe.

Exemplo para Instagram + Casual:
```
Você é um especialista em criar bios para Instagram.
Crie uma bio casual e autêntica para {name}.
- Profissão: {profession}
- Personalidade: {traits}
- Máximo 150 caracteres
- Use 1-2 emojis relevantes
- Tom casual e amigável
- Não use hashtags
```

## Validação de API Key

```typescript
export function validateApiKey(key: string): boolean {
  // Groq keys começam com 'gsk_'
  return key.startsWith('gsk_') && key.length > 20
}
```

## Estados de Loading

1. **Gerando bio:** 
   - Botão mostra spinner
   - Texto: "Criando sua bio..."
   - Desabilita formulário

2. **Erro:**
   - Toast com mensagem amigável
   - Botão volta ao normal
   - Permite tentar novamente

## Tratamento de Erros

- **401:** "Chave de API inválida. Verifique e tente novamente."
- **429:** "Muitas requisições. Aguarde um momento."
- **500:** "Algo deu errado. Tente novamente."
- **Network:** "Sem conexão. Verifique sua internet."

## SEO & Meta

```typescript
export const metadata = {
  title: 'BioGen - Crie sua bio perfeita em segundos',
  description: 'Gerador de bios para Instagram, LinkedIn, Twitter e mais. Powered by AI, 100% grátis.',
  openGraph: {
    title: 'BioGen - Crie sua bio perfeita em segundos',
    description: 'Gerador de bios para redes sociais. Powered by AI.',
    images: ['/og-image.png'],
  },
}
```

## Git & Deploy

- Repo: `AutonomousClara/biogen`
- Commits em português: `feat:`, `fix:`, `style:`, `docs:`
- Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
- Deploy: Vercel
- Domínio: autonomousclara.com/products/biogen (via rewrite)

## Definition of Done

- [ ] Landing page vende o produto
- [ ] Onboarding explica API key de forma amigável
- [ ] Formulário é intuitivo e divertido
- [ ] Bio é gerada corretamente
- [ ] Copiar funciona
- [ ] Gerar outra funciona
- [ ] Funciona no mobile
- [ ] Erros são tratados com mensagens claras
- [ ] Carregamento tem feedback visual

## Início

1. `pnpm create next-app . --typescript --tailwind --app --src-dir=false`
2. Limpar boilerplate
3. Criar componentes UI base
4. Implementar landing page
5. Implementar onboarding
6. Implementar formulário
7. Implementar API route
8. Implementar resultado
9. Polish e animações
10. Testar fluxo completo

---

Lembre-se: **É um produto, não uma ferramenta.** Cada tela deve encantar. ✨
