import InputSection from "./Components/InputSection";
import { INPUT_SECTIONS } from "./constants";

function App() {
  return (
    <div>
      <header id="header">
        <img src="/investment-calculator-logo.png" />
        <h1>React Investment Calculator</h1>
      </ header>
      <div className="input-group">
        <InputSection sections={INPUT_SECTIONS} />
        {/* <InputBox label="number1" defaultVal="A val one" /> */}
      </div>
    </div>
  );
}

export default App;
