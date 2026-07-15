const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

function classifyDocument(text) {
  const lower = text.toLowerCase();

  if (
    lower.includes("not working") ||
    lower.includes("issue") ||
    lower.includes("problem") ||
    lower.includes("error") ||
    lower.includes("complaint")
  ) {
    return "Complaint";
  }

  if (
    lower.includes("how") ||
    lower.includes("what") ||
    lower.includes("where") ||
    lower.includes("when") ||
    lower.includes("?")
  ) {
    return "Inquiry";
  }

  if (
    lower.includes("suggest") ||
    lower.includes("feedback") ||
    lower.includes("recommend")
  ) {
    return "Feedback";
  }

  if (
    lower.includes("please") ||
    lower.includes("need") ||
    lower.includes("request")
  ) {
    return "Request";
  }

  if (
    lower.includes("thanks") ||
    lower.includes("thank you") ||
    lower.includes("great") ||
    lower.includes("excellent")
  ) {
    return "Appreciation";
  }

  return "Inquiry";
}

app.get("/", (req, res) => {
  res.json({
    message: "AI Document Classifier Backend Running",
  });
});

app.post("/classify", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        error: "Document text is required",
      });
    }

    const category = classifyDocument(text);

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: `
You are an AI assistant.

The document has already been classified.

Category:
${category}

Customer Text:
${text}

Your job is ONLY to generate:

1. confidence (80-100)
2. reason (one short sentence)

Return ONLY valid JSON.

Example:

{
  "confidence":98,
  "reason":"Customer reports a service issue."
}
`,
        },
      ],
      response_format: {
        type: "json_object",
      },
    });

    const ai = JSON.parse(completion.choices[0].message.content);

    res.json({
      category,
      confidence: ai.confidence,
      reason: ai.reason,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Unable to process document",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});