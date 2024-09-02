import React, { useState } from 'react';

const HookMegaSena = () => {
  const [numeroSorteado, setNumeroSorteado] = useState('');
  const [arrayNumerosSorteados, setArrayNumerosSorteados] = useState([]);

  const sortearNumero = () => {
    if (arrayNumerosSorteados.length >= 6) {
      alert('Já temos 6 números sorteados!');
      return;
    }

    const novoNumero = Math.floor(Math.random() * 60) + 1;

    setNumeroSorteado(novoNumero);
    setArrayNumerosSorteados([...arrayNumerosSorteados, novoNumero]);
  };

  return (
    <div>
      <h1>HookMegaSena</h1>
      <p>Último numero sorteado: {numeroSorteado}</p>
      <p>Números sorteados: {arrayNumerosSorteados.join(' - ')}</p>
      <button onClick={sortearNumero}>Sortear Número</button>
    </div>
  );
};

export default HookMegaSena;
