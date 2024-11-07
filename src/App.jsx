import InputSection from "./Components/InputSection";
import IndivInput from "./Components/IndivInput";
import { useState } from "react";

// const inputSections = [
//   {
//       label: "Initial Investment",
//       value: 0
//   },
//   {
//       label: "Annual Investment",
//       value: 10,
//   },
//   {
//       label: "Expected Return",
//       value: 100,
//   },
//   {
//       label: "Duration",
//       value: 1000,
//   }
// ]

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
        value: 1000,
    }
  ]);
  
  function handleInputValueChange(label, newVal){
    // setInputSections(event.target.value)
    setInputSections(prevSections =>
      prevSections.map(section =>
        section.label === label
          ? { ...section, value: newVal }
          : section
      )
    );
      console.log(inputSections);
  };

  return (
    <div>
      <header id="header">
        <img src="/investment-calculator-logo.png" />
        <h1>React Investment Calculator</h1>
      </ header>

      <div id="user-input">
        {inputSections.map((indivSection) => (
          <IndivInput 
          key={indivSection.label} 
          label={indivSection.label} 
          val={indivSection.value} 
          onValChange={handleInputValueChange}
        />
        ))}
      </div>

    </div>
  );
}

export default App;
