export default function ActionButtons({
  analyzeDocument,
  clearDocument,
  loading,
  hasText,
}) {
  return (
    <div className="button-group">

      <button
        className="primary-btn"
        onClick={analyzeDocument}
        disabled={loading}
      >
        {loading ? (
          <>
            ⏳ Analyzing...
          </>
        ) : (
          <>
            🚀 Analyze Document
          </>
        )}
      </button>

      <button
        className="secondary-btn"
        onClick={clearDocument}
        disabled={!hasText}
      >
        🗑 Clear
      </button>

    </div>
  );
}