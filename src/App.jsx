import { useState } from "react";

import IndivInput from "./Components/IndivInput.jsx";
import Results from "./Components/Results.jsx";

import logo from "./assets/investment-calculator-logo.png";

function App() {
  const [inputSections, setInputSections] = useState([
    {
        label: "Initial Investment",
        value: 0
    },
    {
        label: "Annual Investment",
        value: 10,
    },
    {
        label: "Expected Return",
        value: 100,
    },
    {
        label: "Duration",
        value: 10,
    }
  ]);
  const inputIsValid = inputSections[3].value > 0;
  
  function handleInputValueChange(label, newVal){
    setInputSections(prevSections =>
      prevSections.map(section =>
        section.label === label
          ? { ...section, value: +newVal }
          : section
      )
    );
      console.log(inputSections);
  };

  return (
    <div>
      <header id="header">
        <img src={logo} alt="logo showing a money bag" />
        <h1>React Investment Calculator</h1>
      </ header>

      <section id="user-input">
        <div className="input-group">
        {inputSections.map((indivSection) => (
          <IndivInput 
          key={indivSection.label} 
          label={indivSection.label} 
          val={indivSection.value} 
          onValChange={handleInputValueChange}
        />
        ))}
        </div>
      </section>

      <div>
        {inputIsValid ? (
          <Results userInput={inputSections} />) : (
          <p className="center">Please input a non-negative duration greater than 0.</p>
        )
      }
      </div>

    </div>
  );
}

export default App;
