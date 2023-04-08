import React from 'react';
import '../hojas-de-estilo/Contador.css'

// Sin sintaxis de desestructuración.

//function Contador(props) {
//  return (
//    <div className='contador'>
//      {props.numClics}
//    </div>
//  )
//}

// Con sintaxis de desustructuración.

function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  )
}

export default Contador;