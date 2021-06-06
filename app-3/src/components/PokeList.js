import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PokeList(props) {
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
            setPokeList(res.data.results)
        })
    }, [])

    const mappedPokeList = pokeList.map(pokemon =>
        <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
            <h3>{pokemon.name}</h3>
        </Link>)

    return (
        <div>
            { mappedPokeList}
        </div>
    )
}