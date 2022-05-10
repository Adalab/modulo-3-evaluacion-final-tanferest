import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router-dom';

import getMovieData from '../services/movieData';
import getDirectors from '../services/directorsData';
import ls from '../services/ls';
import '../styles/Main.scss';

import Filters from './Filters';
import MovieDetail from './MovieDetail';
import MovieList from './MovieList';
import Header from './Header';

const App = () => {
  // Constantes de estado
  const [movieData, setMovieData] = useState(ls.get('movies', []));
  const [directors, setDirectors] = useState([]);
  const [selectDir, setSelectDir] = useState('all');
  const [titleSearch, setTitleSearch] = useState('');
  const [selectYear, setSelectYear] = useState('all');

  // useEffect
  useEffect(() => {
    if(movieData.length === 0){
    getMovieData().then((apiData) => {
      console.log(apiData);
      setMovieData(apiData);
    });
  }},[movieData]);

  useEffect(() => {
    getDirectors()
    .then((directorsData) => {
      console.log(directorsData);
      setDirectors(directorsData);
    })
  }, []);

  useEffect(() => {
    ls.set('movies', movieData);
  }, [movieData])

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
    })
    .filter((item) => {
      if (selectDir === 'all') {
        return true;
      } else {
        return selectDir.includes(item.director);
      }
    });

  // Funciones
  const getYears = () => {
    const movieYear = movieData.map((item) => item.year);
    const setOfYears = new Set(movieYear);
    const arrayOfYears = [...setOfYears];
    return arrayOfYears.sort((a,b) => a - b);
  };

  const handleTitleInput = (value) => {
    setTitleSearch(value);
  };

  const handleYearInput = (value) => {
    setSelectYear(value);
  };

  const handleDirectors = (value) => {
    setSelectDir(value);
  }

  // Rutas
  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:id', pathname);
  console.log(dataPath);
  const movieInd = dataPath !== null ? dataPath.params.id : null;
  const clickedMovie = movieData.find((item) => item.id === parseInt(movieInd));
  console.log(`Clicked: ${clickedMovie}`);

  return (
    <>
      <Header />
      <main className="main">
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
                  inputYearValue={selectYear}
                  handleDirectors={handleDirectors}
                  directorsValue={selectDir}
                  directors={directors}
                />
                <MovieList movies={filters} inputTextValue={titleSearch}/>
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
