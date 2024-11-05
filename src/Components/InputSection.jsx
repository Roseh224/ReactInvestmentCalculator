import IndivInput from "./IndivInput"

export default function InputSection({sections}){
    return(
    <div id="user-input">
    {sections.map((indivSection) => (
        <IndivInput key={indivSection.label} {...indivSection} />
    ))}
    </div>
    )
}