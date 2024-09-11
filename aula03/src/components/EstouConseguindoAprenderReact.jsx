import React from 'react';

const EstouConseguindoAprenderReact = (props) => {
  return (
    <div>
      {props.estouConseguindo ? (
        <h2>Estou indo bem...</h2>
      ) : (
        <h2>Preciso estudar mais</h2>
      )}
    </div>
  );
};

export default EstouConseguindoAprenderReact;