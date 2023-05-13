import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import api from '../../api';
import PokeList from '../../components/PokeList/PokeList';
import Pagination from '../../components/Pagination';
import Select from '../../components/Select';

const types = ["all", "poison","ground", "rock","steel", "fire", "water", "grass", "ice", "electric"]

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +searchParams.get('page');
  const currentType = searchParams.get('type');

  const [pokeList, setPokeList] = useState([])
  const [page, setPage] = useState(1)
  const [type, setType] = useState('all')
  const [pageCount, setPageCount] = useState(0)
  const [limit, setLimit] = useState(9)

  useEffect(() => {
    const offset = (page - 1) * limit 
    api.fetchPokemons(offset, limit, type)
    .then((data) => {
      setPokeList(data.results)
      setPageCount(Math.ceil(data.count / limit))
    })
  }, [page, type])

  useEffect(() => {
    currentPage ? setPage(currentPage) : setPage(1)

  },[currentPage]);
  
  useEffect(() => {
    currentType && setType(currentType);
  },[currentType]);

  const handleChange = (e) => {
    setSearchParams({type: e.target.value})
    setType(e.target.value)
  }

  return (
    <>
        <Select 
        list={types} 
        value={type} 
        label='Types' 
        onChange={handleChange} 
        />
        <PokeList pokemons={pokeList}/>
        <Pagination page={page} pageCount={pageCount} type={type} />
    </>
  )
}

export default Home