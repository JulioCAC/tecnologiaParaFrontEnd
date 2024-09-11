import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno';

const App = () => {

  return (
    <div>
      <h1>Questão 1:</h1>
      <EstouConseguindoAprenderReact estouConseguindo = {true}/>
      <EstouConseguindoAprenderReact estouConseguindo = {false}/>
      <h1>Questão 2 e 3:</h1>
      {
        [
          { nome: 'João', email: 'joao@email.com', curso: 'Engenharia', media: 8.5 },
          { nome: 'Maria', email: 'maria@email.com', curso: 'Medicina', media: 6.4 },
          { nome: 'Lucas', email: 'lucas@email.com', curso: 'Direito', media: 7.0 }
        ].map((aluno) => <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>)
      }
    </div>
  )
}

export default App