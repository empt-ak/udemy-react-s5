import Header from './components/Header/Header.tsx'
import Form from './components/Form/Form.tsx'
import Table from './components/Table/Table.tsx'
import { useState } from 'react'
import { FormModel } from './models/form-model.ts'

export const App = () => {
  const [userData, setUserData] = useState<FormModel>({
    initialInvestment: 0,
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0,
  })

  const formChangesHandler  = (key: string, value: number) => {
    setUserData(previous => {
      return {
        ...previous,
        [key]: value
      }
    })
  }

  return (
    <>
      <Header />
      <Form  data={userData} onFormChanges={formChangesHandler}/>
      <Table data={userData} />
    </>
  )
}

export default App
