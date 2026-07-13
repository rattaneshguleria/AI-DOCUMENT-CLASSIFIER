const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AI Document Classifier Backend Running"
  });
});

app.post("/classify", async (req, res) => {
  try {
    const { text } = req.body;

    const response = await axios.post(
      process.env.N8N_WEBHOOK,
      { text }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Unable to connect to AI backend"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});