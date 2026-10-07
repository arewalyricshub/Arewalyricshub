import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Test route
app.get("/", (req, res) => {
    res.json({
        status: "online",
        service: "Arewa Lyrics Hub AI"
    });
});

// AI endpoint
app.post("/api/ai", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || typeof message !== "string") {
            return res.status(400).json({
                error: "Message is required."
            });
        }

        const response = await client.responses.create({
            model: "gpt-5-mini",

            instructions: `
You are Arewa AI, the official AI assistant
for Arewa Lyrics Hub.

Arewa Lyrics Hub is a Hausa/Arewa creative platform
focused on:

- Hausa lyrics
- Music
- Artists
- Music promotion
- Content creation
- Graphic design
- Video editing
- Hausa and English translation

You can communicate in:
- Hausa
- English
- Hausa + English

Be helpful, respectful and concise.

If the user asks for original Hausa lyrics,
help them create original lyrics.

Do not pretend to be a human employee.

When users ask about Arewa Lyrics Hub,
explain that it is a platform for Hausa/Arewa
music, lyrics, artists and creative services.
`,

            input: message
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {

        console.error("AI ERROR:", error);

        res.status(500).json({
            error: "AI service failed."
        });
    }
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(
        `Arewa AI backend running on port ${PORT}`
    );
});
