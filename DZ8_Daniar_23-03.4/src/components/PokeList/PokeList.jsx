import React from 'react';
import { Grid } from '@mui/material';
import PokeItem from '../PokeItem';

const PokeList = ({ pokemons = [] }) => {
  const pokemonElems = pokemons.map(({ name }) => <PokeItem key={name} name={name} />);

  return (
    <Grid container spacing={2}>
      {pokemonElems}
    </Grid>
  );
};

export default PokeList;
