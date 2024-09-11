import React from 'react'

const Aluno = ({ nome, email, curso, media }) => {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Media: {media}</p>
        <p>Status: {media >= 7 ? <strong>APROVADO</strong> : <strong>REPROVADO</strong>}</p>
        <hr/>
    </div>
  )
}

export default Aluno