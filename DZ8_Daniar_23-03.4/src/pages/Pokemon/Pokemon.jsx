import React from 'react'
import { useLocation } from 'react-router-dom'

import PokeCard from '../../components/PokeCard';

const Pokemon = () => {
  const {state} = useLocation();
  return (
    <>
      <PokeCard {...state} />
    </>
  )
}

export default Pokemon