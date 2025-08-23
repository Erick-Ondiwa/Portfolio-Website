import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(express.json());
app.use(cors()); // ok for dev; tighten in prod

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Minimal chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // or gpt-3.5-turbo
      messages: [
        { role: "system", content: "You are Erick’s AI assistant, always friendly and concise." },
        { role: "user", content: message }
      ],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 8787, () =>
  console.log(`Erick AI server running on http://localhost:${process.env.PORT || 8787}`)
);
