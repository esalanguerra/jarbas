import { openAi } from "@jarbas/libs/gpt/OpenAIGPT";

export async function GenerateText(
  messages: any[],
  model: string,
  temperature: number,
  max_tokens: number,
  top_p: number
) {
  const response = await openAi.chat.completions.create({
    model, // Especificando o modelo a ser usado
    stream: true, // Ativando o modo de streaming
    messages, // Passando as mensagens para a API
    temperature, // Passando a temperatura
    max_tokens, // Passando o número máximo de tokens
    top_p, // Passando o valor de top-p
  });
}
