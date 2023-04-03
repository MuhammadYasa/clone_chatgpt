const { Configuration, OpenAIApi } = require("openai");

// api key from openai
const API_KEY = "Masukkan API KEY mu di sini";

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function sendMessageToOpenAI(message) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.9, // seberapa kreatif bot chat menjawab, dari point 0 ke 1, semakin tinggi semakin kreatif
    max_tokens: 256, // maks respons
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  // mengembalikan jawaban dari bot ai
  return response.data.choices[0].text;
}
