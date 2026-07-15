# 🤖 AI Document Classifier

An AI-powered web application that intelligently classifies customer documents using **Groq Llama 3.3 70B**. The system analyzes customer messages, predicts the most appropriate category, generates a confidence score, and explains the reasoning behind each prediction.

---

## 🚀 Live Demo

### 🌐 Frontend
https://ai-document-classifier.vercel.app/

### ⚙️ Backend API
https://ai-document-classifier-3qv9.onrender.com/

---

# ✨ Features

- 🤖 AI-powered document classification
- 🧠 Groq Llama 3.3 70B integration
- 📂 Intelligent classification into:
  - Complaint
  - Inquiry
  - Feedback
  - Request
  - Appreciation
- 📊 AI-generated confidence score
- 💡 AI-generated explanation
- 📈 Category distribution chart
- 📝 Recent classification history
- 🎨 Modern glassmorphism interface
- 📱 Fully responsive design
- ⚡ Fast React + Vite frontend
- 🌍 Cloud deployment using Vercel & Render
- 🔒 Secure API key management using environment variables

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- CSS3
- JavaScript
- Fetch API

## Backend

- Node.js
- Express.js
- Groq SDK
- CORS
- dotenv

## AI

- Groq API
- Llama-3.3-70B-Versatile

## Deployment

- Vercel
- Render

---

# 📂 Project Structure

```
AI-DOCUMENT-CLASSIFIER
│
├── backend
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── ...
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── style.css
│   │   └── ...
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/rattaneshguleria/AI-DOCUMENT-CLASSIFIER.git

cd AI-DOCUMENT-CLASSIFIER
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
PORT=5000
```

Run the backend

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env` file inside the frontend folder.

```env
VITE_API_URL=http://localhost:5000
```

Run the frontend

```bash
npm run dev
```

---

# API

## POST `/classify`

### Request

```json
{
  "text": "My internet has not been working for two days."
}
```

### Response

```json
{
  "category": "Complaint",
  "confidence": 98,
  "reason": "Customer reports an unresolved internet service issue."
}
```

---

# Classification Categories

| Category | Description |
|-----------|-------------|
| Complaint | Reports issues, delays, defects, billing problems or dissatisfaction |
| Inquiry | Requests information or asks questions |
| Feedback | Shares suggestions, recommendations or opinions |
| Request | Asks the organization to perform an action |
| Appreciation | Expresses gratitude or compliments |

---

# Deployment

## Frontend

**Platform:** Vercel

Build Command

```bash
npm run build
```

---

## Backend

**Platform:** Render

Environment Variable

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# Future Enhancements

- 📄 PDF document classification
- 📄 DOCX document support
- 📄 TXT file support
- 🖼 OCR image text extraction
- 😊 Sentiment analysis
- 🚨 Priority detection
- 📥 Export reports (PDF/CSV)
- 📊 Advanced analytics dashboard
- 🌙 Dark / Light mode
- 📂 Drag & Drop document upload
- 🌐 Multi-language support
- 👤 User authentication

---

# Author

**Rattanesh Guleria**

B.Tech Computer Science Engineering

Lovely Professional University

GitHub: https://github.com/rattaneshguleria

---

# License

This project is released under the **MIT License**.

---

⭐ If you found this project useful, consider giving it a star!