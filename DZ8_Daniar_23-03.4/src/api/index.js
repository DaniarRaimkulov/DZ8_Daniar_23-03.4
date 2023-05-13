import axios from 'axios';

export const fetchPokemons = async (offset = 9, limit = 9, type = 'all') => {
  try {
    if (type === 'all') {
      const { data } = await axios.get(`/pokemon?limit=${limit}&offset=${offset}`);
      return data;
    } else {
      console.log('type: ', type);
      const { data } = await axios.get(`/type/${type}/`);
      const start = offset;
      const end = offset + limit;

      const filteredArr = data.pokemon.filter((_, idx) => start <= idx && idx < end);
      const results = filteredArr.map(({ pokemon }) => ({ name: pokemon.name }));

      return { results, count: data.pokemon.length };
    }
  } catch (error) {
    throw new Error(`Failed to fetch pokemons: ${error}`);
  }
};

export const fetchPokemon = async (name) => {
  try {
    const { data } = await axios(`/pokemon/${name}`);
    const { front_default: imgUrl, front_shiny: imgSrc } = data.sprites.other;
    console.log(data.sprites.other);
    return { ...data, imgUrl, imgSrc };
  } catch (error) {
    throw new Error(`Failed to fetch pokemon: ${error}`);
  }
};
