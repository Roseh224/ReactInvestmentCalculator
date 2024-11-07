// import * as investments from '..util/investment.js';
import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({userInput}){
    const resultingVals = calculateInvestmentResults(userInput);
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
            {resultingVals.map((item) => (
                <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.annualInvestment)}</td>
                </tr>
            ))}
        </tbody>
  </table>
    )
}