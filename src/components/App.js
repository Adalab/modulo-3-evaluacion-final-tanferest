// import {Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';

import getMovieData from '../services/movieData'
import MovieList from './MovieList';

const App = () => {
  // Constantes de estado
  const [movieData, setMovieData] = useState([]);

  // useEffect
  useEffect(() => {
    getMovieData()
    .then((apiData) => {
      setMovieData(apiData);
    })
  }, []);
  // Funciones

  return <>
    <header>
      <h1>Wow</h1>
    </header>
    <main>
      <MovieList movies={movieData}/>
    </main>
  </>;
};

export default App;