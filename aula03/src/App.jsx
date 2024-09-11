import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno';

const App = () => {

  return (
    <div>
      <h1>Questão 1:</h1>
      <EstouConseguindoAprenderReact estouConseguindo = {true}/>
      <EstouConseguindoAprenderReact estouConseguindo = {false}/>
      <h1>Questão 2:</h1>
      {
        [
          { nome: 'João', email: 'joao@email.com', curso: 'Engenharia' },
          { nome: 'Maria', email: 'maria@email.com', curso: 'Medicina' },
          { nome: 'Lucas', email: 'lucas@email.com', curso: 'Direito' }
        ].map((aluno) => <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso}/>)
      }
    </div>
  )
}

export default App