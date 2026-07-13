import { useState } from "react";

import Header from "./components/Header";
import TextInput from "./components/TextInput";
import ActionButtons from "./components/ActionButtons";
import ResultCard from "./components/ResultCard";
import FileUpload from "./components/FileUpload";

export default function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function analyzeDocument() {
    if (!text.trim()) {
      alert("Please enter a document.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "http://localhost:5000/classify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();

      setResult(Array.isArray(data) ? data[0] : data);

    } catch (err) {

      console.error(err);

      alert("Cannot connect to backend.");

    }

    setLoading(false);
  }

  function clearDocument() {
    setText("");
    setResult(null);
  }

  return (
    <div className="container">
      <div className="card">

        <Header />

        <FileUpload setText={setText} />

        <TextInput
          text={text}
          setText={setText}
          loading={loading}
        />

        <ActionButtons
          analyzeDocument={analyzeDocument}
          clearDocument={clearDocument}
          loading={loading}
          hasText={text.trim()}
        />

        <ResultCard result={result} />

      </div>
    </div>
  );
}