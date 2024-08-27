import React from 'react'
import Divisao from './components/Divisao'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={4} num2={2}/>
      <Subtracao num1={4} num2={2}/>
      <Multiplicacao num1={4} num2={2}/>
      <Divisao num1={4} num2={2}/>
      <PrecisoEstudar nome="ReactJS"/>
    </div>
  )
}

export default App