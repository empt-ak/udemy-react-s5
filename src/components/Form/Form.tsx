import { FormModel } from '../../models/form-model.ts'
import Input from '../Input/Input.tsx'

interface FormProps {
  data: FormModel
  onFormChanges: (key: string, value: number) => void
}

const Form = ({data, onFormChanges} : FormProps) => {
  const onChangeHandler = (content: number, key: string) => {
    onFormChanges(key, content)
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          id="initial"
          label="Initial investment"
          content={data.initialInvestment}
          onChange={(v) => onChangeHandler(v, 'initialInvestment')}
        />
        <Input
          id="annual"
          label="Annual investment"
          content={data.annualInvestment}
          onChange={(v) => onChangeHandler(v, 'annualInvestment')}
        />
      </div>

      <div className="input-group">
        <Input
          id="expectedReturn"
          label="Expected return"
          content={data.expectedReturn}
          onChange={(v) => onChangeHandler(v, 'expectedReturn')}
        />
        <Input id="duration" label="Duration" content={data.duration} onChange={(v) => onChangeHandler(v, 'duration')} />
      </div>
    </section>
  )
}

export default Form
