import React from 'react'
import styles from './Exercicio03.module.css'


const Exercicio03 = (props) => {

    function defineMensagem(mes) {
        if(mes === 'setembro'){
            return 'Prevenção ao suicídio'
        } else if (mes === 'outubro'){
            return 'Conscientização sobre o câncer de mama.'
        } else {
            return 'Prevenção e combate ao câncer de próstata.'
        }
    }

    function defineCorDeFundo(mes){

        if(mes === 'setembro'){
            return styles.setembro
        } else if (mes === 'outubro'){
            return styles.outubro
        } else {
            return styles.novembro
        }
    }

  return (
    <div className={defineCorDeFundo(props.mes)}>
        <p>{defineMensagem(props.mes)}</p>

    </div>
  )
}

export default Exercicio03