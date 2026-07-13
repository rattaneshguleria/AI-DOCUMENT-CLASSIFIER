export default function TextInput({
  text,
  setText,
  loading,
}) {
  function handleChange(e) {
    setText(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <>
      <textarea
        placeholder="Paste your customer email, complaint, feedback or request here..."
        value={text}
        onChange={handleChange}
        disabled={loading}
      />

      <div className="character-counter">
        Characters: <strong>{text.length}</strong> / 5000
      </div>
    </>
  );
}