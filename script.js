import OpenAI from 'openai';
import {} from 'dotenv';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Hello!"}],
  });
  console.log(chatCompletion.choices[0].message);


