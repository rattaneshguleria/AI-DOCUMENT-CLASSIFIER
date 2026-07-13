export default function CategoryBadge({ category }) {
  const colors = {
    Complaint: "#ef4444",
    Inquiry: "#3b82f6",
    Feedback: "#f59e0b",
    Request: "#8b5cf6",
    Appreciation: "#22c55e",
    Other: "#64748b",
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 18px",
        borderRadius: "999px",
        background: colors[category] || "#64748b",
        color: "#fff",
        fontWeight: "600",
        marginBottom: "20px",
      }}
    >
      {category}
    </span>
  );
}