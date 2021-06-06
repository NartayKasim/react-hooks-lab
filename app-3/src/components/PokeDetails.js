import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PokeDetails(props) {
    const { name } = props.match.params;
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
            setPokemon(res.data)
        })
    }, [props])

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        </div>
    )
}