export default function ConfidenceBar({ confidence }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <span>Confidence</span>

        <strong>{confidence}%</strong>
      </div>

      <div
        style={{
          width: "100%",
          height: "12px",
          background: "#334155",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${confidence}%`,
            height: "100%",
            background: "#3b82f6",
            transition: "0.5s",
          }}
        />
      </div>
    </div>
  );
}