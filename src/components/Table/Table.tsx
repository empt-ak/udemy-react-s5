import { FormModel } from '../../models/form-model.ts'
import { calculateInvestmentResults } from '../../investment.ts'

interface TableProps {
  data: FormModel
}

const Table = ({ data }: TableProps) => {
  console.table(data)
  const rows = [...calculateInvestmentResults(data)]

  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>inv value</th>
          <th>intereset (year)</th>
          <th>total intereset</th>
          <th>invested</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => {
          return (
            <tr key={i}>
              <td>{r.year}</td>
              <td>{r.annualInvestment}</td>
              <td>{r.interest}</td>
              <td>{r.valueEndOfYear}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
