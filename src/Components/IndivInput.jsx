import { useState } from "react";

export default function IndivInput(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(props.default);

  function handleChange(event) {
    setContent(event.target.value);
  }

  return (
    <span>
      <label>{props.label}</label>
      <input type="text" value={content} onChange={handleChange} />
    </span>
  );
}