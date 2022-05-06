import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router-dom';
import getMovieData from '../services/movieData';
import Filters from './Filters';
import MovieDetail from './MovieDetail';
import MovieList from './MovieList';

const App = () => {
  // Constantes de estado
  const [movieData, setMovieData] = useState([]);
  const [titleSearch, setTitleSearch] = useState('');
  const [selectYear, setSelectYear] = useState('all');

  // useEffect
  useEffect(() => {
    getMovieData().then((apiData) => {
      console.log(apiData);
      setMovieData(apiData);
    });
  }, []);

  // Filtros
  const filters = movieData
    .filter((item) => {
      return titleSearch === ''
        ? true
        : item.movie.toLowerCase().includes(titleSearch.toLowerCase());
    })
    .filter((item) => {
      if (selectYear === 'all') {
        return true;
      } else {
        return selectYear.includes(item.year);
      }
    });

  // Funciones
  const getYears = () => {
    const movieYear = movieData.map((item) => item.year);
    const setOfYears = new Set(movieYear);
    const arrayOfYears = [...setOfYears];
    return arrayOfYears;
  };

  const handleTitleInput = (value) => {
    setTitleSearch(value);
  };

  const handleYearInput = (value) => {
    setSelectYear(value);
  };

  // Rutas
  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:id', pathname);
  console.log(dataPath);
  const movieInd = dataPath !== null ? dataPath.params.id : null;
  const clickedMovie = movieData.find((item) => item.id === parseInt(movieInd));
  console.log(`Clicked: ${clickedMovie}`);

  return (
    <>
      <header>
        <h1>Wow</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleTitle={handleTitleInput}
                  inputTextValue={titleSearch}
                  years={getYears()}
                  handleYear={handleYearInput}
                />
                <MovieList movies={filters} />
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDetail item={clickedMovie} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
