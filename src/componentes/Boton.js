import React from 'react';
import '../hojas-de-estilo/Boton.css'; //Para importar css no es necesario nada más.

//function Boton(props) {
//  return {
//    < button >
//    { props.texto }
//    </button >
//  }
//}

//Con sintaxis de desustruracción:

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    < button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic} >
      {/*//Usando el operador ternario para asignar una clase y usando un event listener pasandole una función 'manejarClic'*/}
      {texto}
    </button >
  )
}

export default Boton;