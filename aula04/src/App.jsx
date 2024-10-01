import React from 'react'
import Exercicio01 from './components/Exercicio01'
import Exercicio03 from './components/Exercicio03'
import Exercicio05 from './components/Exercicio05'

const App = () => {
  return (
    <div>
      <Exercicio01/>
      <Exercicio03/>
      <Exercicio03 mes="setembro" />
      <Exercicio03 mes="outubro"/>
      <Exercicio05/>
    </div>
  )
}

export default App