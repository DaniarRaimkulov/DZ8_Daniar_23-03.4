import React, { useEffect, useState } from 'react'
import { getPokemonId } from '../api/getPokemons'
import { Link } from 'react-router-dom'
import '../App.css'

export const PokemonCard = ({ pokemon }) => {
    const [ pokemonInfo, setPokemonInfo ] = useState()

    useEffect(() => {
        fetch(pokemon.url)
            .then(res => res.json())
            .then(data => setPokemonInfo(data))
    }, [])

    if (!pokemonInfo) return <div className={'pokemonCard'}>LOADING</div>

    return (
        <Link to={`/PokeInfo/${pokemon?.name}`}>
            <div className='pokemonCard'>
                <div className='pokemonName'>{pokemon?.name}</div>
                <img src={pokemonInfo?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name}/>
            </div>
        </Link>
    )
}
