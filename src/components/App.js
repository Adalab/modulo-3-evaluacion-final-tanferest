// import {Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';

import getMovieData from '../services/movieData';
import Filters from './Filters';
import MovieList from './MovieList';

const App = () => {
  // Constantes de estado
  const [movieData, setMovieData] = useState([]);
  const [titleSearch, setTitleSearch] = useState('');

  // useEffect
  useEffect(() => {
    getMovieData().then((apiData) => {
      console.log(apiData);
      setMovieData(apiData);
    });
  }, []);
  // Filtros
  const filterTitle = movieData
  .filter((item) => {
    return titleSearch === '' ? true : item.movie.toLowerCase().includes(titleSearch.toLowerCase())  
  });
  // Funciones
  const getYears = () => {
    const movieYear = movieData.map((item) => item.year);
    const setOfYears = new Set(movieYear);
    const arrayOfYears = [...setOfYears];
    return arrayOfYears;
  };
  getYears();
  const handleTitleInput = (value) => {
    setTitleSearch(value);
  };


  return (
    <>
      <header>
        <h1>Wow</h1>
      </header>
      <main>
        <Filters handleTitle={handleTitleInput} inputValue={titleSearch}/>
        <MovieList movies={filterTitle} />
      </main>
    </>
  );
};

export default App;
