export default function IndivInput({label, val, onValChange}) {
  return (
    <p>
      <label>{label}</label>
      <input 
        type="number" 
        value={val} 
        required 
        onChange={(event) => onValChange(label, event.target.value)} />
    </p>
  );
}