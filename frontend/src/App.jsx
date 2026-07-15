import { useState } from "react";

import Header from "./components/Header";
import TextInput from "./components/TextInput";
import ActionButtons from "./components/ActionButtons";
import ResultCard from "./components/ResultCard";
import DistributionChart from "./components/DistributionChart";
import RecentRequests from "./components/RecentRequests";

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  async function analyzeDocument() {
    if (!text.trim()) {
      alert("Please enter a document.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/classify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
        }),
      });

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();

      const responseData = Array.isArray(data)
        ? data[0]
        : data;

      setResult(responseData);

      setHistory((prev) => [
        responseData,
        ...prev.slice(0, 9),
      ]);

    } catch (error) {
      console.error(error);
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

        <DistributionChart history={history} />

        <RecentRequests history={history} />
      </div>
    </div>
  );
}