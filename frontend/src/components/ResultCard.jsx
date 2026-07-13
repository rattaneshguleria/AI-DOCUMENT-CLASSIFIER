import CategoryBadge from "./CategoryBadge";
import ConfidenceBar from "./ConfidenceBar";

export default function ResultCard({ result }) {
  if (!result) return null;

  function copyResult() {
    navigator.clipboard.writeText(
`Category: ${result.category}

Confidence: ${result.confidence}%

Reason: ${result.reason}`
    );

    alert("Copied to clipboard!");
  }

  return (
    <div className="result">

      <h2>Classification Result</h2>

      <CategoryBadge category={result.category} />

      <ConfidenceBar confidence={result.confidence} />

      <div className="item">

        <span>Reason</span>

        <p>{result.reason}</p>

      </div>

      <button
        style={{
          marginTop: "20px",
        }}
        onClick={copyResult}
      >
        📋 Copy Result
      </button>

    </div>
  );
}