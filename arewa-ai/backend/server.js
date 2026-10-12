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

/* =========================================
   AREWA AI — ANNOUNCEMENT IMAGE GENERATOR
   ========================================= */

app.post("/api/generate-image", async (req, res) => {
    try {
        const { prompt } = req.body || {};

        if (typeof prompt !== "string" || !prompt.trim()) {
            return res.status(400).json({
                error: "Please describe the image you want."
            });
        }

        if (prompt.trim().length > 4000) {
            return res.status(400).json({
                error: "Image description must be 4000 characters or fewer."
            });
        }

        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({
                error: "Image generation is not configured on the server."
            });
        }

        const image = await client.images.generate({
            model: "gpt-image-1.5",
            prompt: `
Create a premium announcement poster for Arewa Lyrics Hub.

Visual identity:
- Dark green, white and gold
- Professional Hausa/Arewa creative brand
- Clean, modern layout
- High-quality graphic design
- Clear visual hierarchy
- Suitable for a website announcement

User's requested design:
${prompt.trim()}
`,
            size: "1024x1024",
            quality: "low",
            output_format: "png",
            n: 1
        });

        const generatedImage = image.data?.[0]?.b64_json;

        if (!generatedImage) {
            return res.status(502).json({
                error: "The image service returned no image. Please try again."
            });
        }

        return res.json({
            success: true,
            image: generatedImage,
            mimeType: "image/png"
        });

    } catch (error) {
        console.error(
            "IMAGE GENERATION ERROR:",
            error?.message || error
        );

        return res.status(500).json({
            error: "Could not generate the image. Check the server logs and API access."
        });
    }
});
        
// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(
        `Arewa AI backend running on port ${PORT}`
    );
});
