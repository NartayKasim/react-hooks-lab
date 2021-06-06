import React, { useState, useEffect } from 'react';
import ListItem from './components/ListItem';
import axios from 'axios';
import './App.css';

function App() {

  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setPokeList(res.data.results)
    })
  }, [])

  const mappedPokeList = pokeList.map((pokemon, idx) => <ListItem pokemon={pokemon.name} key={idx} />)

  console.log(pokeList)

  return (
    <div className="App">
      { mappedPokeList}
    </div>
  );
}

export default App;
