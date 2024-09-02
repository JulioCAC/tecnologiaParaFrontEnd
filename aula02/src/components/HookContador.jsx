import React, { useState } from 'react'

const HookContador = () => {
    const [contador, setContador] = useState(0);
    
    const incrementarContador = () => {
        setContador(contador + 1)
    }

    const decrementarContador = () => {
        setContador(contador - 1)
    }
  return (
    <div>
        <h1>Contador {contador}</h1>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <br/><br/>
        <button onClick={decrementarContador}>Decrementar Contador</button>
    </div>
  )
}

export default HookContador