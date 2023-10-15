import React, { useState } from "react";
import "./task1.css"; // Import your CSS file

function Task1() {
  const [text, setText] = useState("");

  const countWords = (inputText) => {
    const words = inputText.trim().split(/\s+/);
    return words.length;
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  return (
    <div className="word-counter-container">
      <h1>Word Counter</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {countWords(text)}</p>
    </div>
  );
}

export default Task1;
