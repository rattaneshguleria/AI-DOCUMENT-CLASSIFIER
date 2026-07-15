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

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.2,
      response_format: {
        type: "json_object",
      },
      messages: [
        {
          role: "system",
          content: `
You are an expert customer support document classifier.

Classify every customer message into EXACTLY ONE of these five categories:

1. Complaint
2. Inquiry
3. Feedback
4. Request
5. Appreciation

Definitions:

Complaint:
Customer reports a problem, defect, billing issue, service issue, delay, damaged item, poor experience or dissatisfaction.

Examples:
- Internet is not working.
- I was charged twice.
- My order never arrived.
- Technician never came.
- App crashes every time.

Inquiry:
Customer is asking for information or asking a question.

Examples:
- What is my order status?
- How do I reset my password?
- Where is my package?
- What are your business hours?

Feedback:
Customer is giving suggestions or opinions to improve something.

Examples:
- Your website should load faster.
- Please add dark mode.
- I think the UI could be better.
- The app needs more filters.

Request:
Customer is asking the company to perform an action.

Examples:
- Change my registered email.
- Cancel my subscription.
- Please update my phone number.
- Enable my account.
- Send me the invoice.

Appreciation:
Customer is expressing gratitude or praising the service.

Examples:
- Thank you for your help.
- Excellent support.
- Amazing experience.
- Great service.

Return ONLY valid JSON.

Example:

{
  "category":"Complaint",
  "confidence":97,
  "reason":"Customer reports a billing issue."
}
`,
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    const ai = JSON.parse(completion.choices[0].message.content);

    res.json({
      category: ai.category,
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