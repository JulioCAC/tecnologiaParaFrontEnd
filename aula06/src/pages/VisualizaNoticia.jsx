import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

const VisualizaNoticia = () => {

const {id} = useParams()

const url = `http://localhost:3000/noticias/${id}`

const [noticia, setNoticia] = useState({})

useEffect(() => {
    async function fechData() {
        const response = await fetch(url)
        const data = await response.json()
        setNoticia(data)
    }
    fechData()
}, [id])

  return (
    <div>
        <h1>{noticia.titulo}</h1>
        <p>{noticia.texto}</p>
    </div>
  )
}

export default VisualizaNoticia