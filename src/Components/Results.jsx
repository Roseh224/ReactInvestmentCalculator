import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({userInput}){
    const extractedInput = {initialInvestment: userInput[0].value, 
        annualInvestment: userInput[1].value,
        expectedReturn: userInput[2].value,
        duration: userInput[3].value
    }
    const resultingVals = calculateInvestmentResults(extractedInput);
    const initialInvest  = resultingVals[0].valueEndOfYear - resultingVals[0].interest - resultingVals[0].annualInvestment;

    return ( 
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultingVals.map((yearData) => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvest;
                return (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(yearData.annualInvestment)}</td>
                </tr>
                );
            })}
        </tbody>
  </table>
    )
}