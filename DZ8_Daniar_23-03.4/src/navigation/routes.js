import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import About from '../pages/About';

export default [
  {
    path: "/pokemons",
    Component: Home
  },
  {
    path: "/pokemons/:name",
    Component: Pokemon
  },
  {
    path: "/About",
    Component: About
  }
  ];
