import { useRef } from "react";

export default function FileUpload({ setText }) {
  const inputRef = useRef();

  function handleFile(file) {
    if (!file) return;

    if (file.type === "text/plain") {
      const reader = new FileReader();

      reader.onload = (e) => {
        setText(e.target.result);
      };

      reader.readAsText(file);
    } else {
      alert("Currently only TXT files are supported.");
    }
  }

  function handleDrop(e) {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    handleFile(file);
  }

  function handleChange(e) {
    handleFile(e.target.files[0]);
  }

  return (
    <>
      <div
        className="upload-box"
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        📂 Drag & Drop a TXT file here

        <br />

        <small>or click to browse</small>
      </div>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept=".txt"
        onChange={handleChange}
      />
    </>
  );
}