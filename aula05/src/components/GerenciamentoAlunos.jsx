import React, { useEffect, useState } from 'react'

const url = "http://localhost:3000/alunos"

const GerenciamentoAlunos = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(()  => {
        async function fetchData() {
            const response = await fetch(url)
            const data = await response.json()

            setAlunos(data)
            
        }
        fetchData()

    }, [])

  return (
    <div>
        <table border ='1px' >
            <thead>
                <tr>
                    <th>Nome:</th>
                    <th>Email:</th>
                </tr>
            </thead>
            <tbody>
                {
                    alunos.map((aluno) => (
                        <tr key={aluno.id}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>

                        </tr>

                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default GerenciamentoAlunos