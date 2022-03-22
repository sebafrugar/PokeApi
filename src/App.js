import React, { useState } from 'react';
import './App.css';
import Pokeapi from './Components/PokeApi';

function App() {

  const [pokemon,setPokemon]=useState([]);

  return (
    <div className="App">
      <Pokeapi pokemon={pokemon}  setPokemon={setPokemon}/>
    </div>
  );
}

export default App;
