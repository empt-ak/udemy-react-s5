import { ChangeEvent } from 'react'

export interface InputProps {
  id: string
  label: string
  content: number
  onChange: (content: number) => void
}

const Input = ({ id, content, label, onChange }: InputProps) => {
  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(+evt.currentTarget.value)
  }

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} value={content} onChange={onChangeHandler} />
    </p>
  )
}

export default Input
