import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/FreeCodeCamp-logo.png';
import { useState } from 'react';

function App() {

  // Hooks. En el arreglo el segundo elemento deber ser el nombre del primero con la palabra "set" al inicio.
  //El primer elemento es la variable que se usa para el estado y la segunda es la función que se debe llamar para modificar el estado.
  const [numClics, setNumClics] = useState(0);

  //Definir una función en App.js para interactividad.

  //const manejarClic = () => {
  //  console.log("Clic");
  //}

  //const reiniciarContador = () => {
  //  console.log("Reiniciar");
  //}

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }; //Poner punto y coma al final de las funciones flecha

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
