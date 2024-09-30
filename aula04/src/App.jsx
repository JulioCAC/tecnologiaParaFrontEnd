import React from 'react'
import Exercicio01 from './components/Exercicio01'
import Exercicio03 from './components/Exercicio03'

const App = () => {
  return (
    <div>
      <Exercicio01/>
      <Exercicio03/>
      <Exercicio03 mes="setembro" />
      <Exercicio03 mes="outubro"/>
    </div>
  )
}

export default App