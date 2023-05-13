import React, { useEffect, useState } from 'react'
import { Pagination } from '../../components/Pagination/Pagination'
import { PokemonCard } from '../../components/PokemonCard'
import { fetchPoke } from '../../api/getPokemons'
import '../../App.css'

export const MainPage = () => {
    const [ pokemonList, setPokemonList ] = useState([])
    const [ offset, setOffSet ] = useState(0)
    const [ page, setPage ] = useState(1)
    const [ count, setCount ] = useState(1)

    const limit = 12

    useEffect(() => {
        fetchPoke({ limit, offset }).then((data) => {
            setPokemonList([...data.results])
            const pageCount = Math.ceil(data.count / limit)
            setCount(pageCount)
        })
    }, [offset])

    const handlePrev = () => {
        if (page === 1) return
        setOffSet(prev => prev - limit)
        setPage(prev => prev - 1)
    }

    const handleNext = () => {
        if (page === count) return
        setOffSet(prev => prev + limit)
        setPage(prev => prev + 1)
    }

    return (
        <div className="container">

            <div className='btnBox'>
                <Pagination page={page} count={count}
                            handlePrev={handlePrev}
                            handleNext={handleNext}>
                </Pagination>
            </div>

            <div className="pokemonList">
                {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>)}
            </div>

            <div className='btnBox'>
                <Pagination page={page} count={count}
                            handlePrev={handlePrev}
                            handleNext={handleNext}>
                </Pagination>
            </div>

        </div>
    )
}
