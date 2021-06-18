import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;


function App() {
  // state frase

  const [frase, guardarFrase] = useState({});
  
    /* Con fetch  y then
    const consultarAPI = () => {
    // FETCH toma la url a la que se le hace la consulta
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // fetch funciona con promises then es el promise
    // si la respuesta del promise es pending hay ue hacer otro .then
    const frase = api.then( respuesta => respuesta.json());
    frase.then(resultado => console.log(resultado) );
    
  }
  */
  // con async, await fetch
  const consultarAPI = async () => {

  const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const frase = await api.json()
  guardarFrase(frase[0]);
  }

  // cargar frase useEffect

  useEffect( () => {
    consultarAPI()
  }, [] )


  return (
    <Contenedor>

      <Frase 
        frase = {frase}
      />
      <Boton
        // () => consultarAPI() o consultarAPI esperan el onclick y consultarAPI() no espera se muestra
        onClick={ consultarAPI }
      >
      Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
