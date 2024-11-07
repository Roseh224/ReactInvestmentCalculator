import { useState } from "react";

export default function IndivInput({label, val, onValChange}) {
const [content, setContent] = useState(val);

  function handleChange(event) {
    setContent(event.target.value);
    // console.log(`inside of IndivInput's handleChange: ${content}`);
    onValChange(label, content); //is two behind right now. 
  }

  return (
    <span>
      <label>{label}</label>
      <input type="text" value={content} onChange={handleChange} />
      {/* <input type="text" value={val} onChange={onValChange} /> */}
    </span>
  );
}