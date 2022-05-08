import MovieItem from "./MovieItem";
import '../styles/MovieList.scss'

function MovieList (props) {
    if (props.movies.length === 0) {
        return <li className="movie-list__notfound">
            <p>Ningún título coincide con "{props.inputTextValue}". ¡Prueba otra vez!</p>
        </li>;
    } else{
    const movieInfo = props.movies.map((item) => {
        return (
        <li className="movie-list__item" key={item.id}>
            <MovieItem item={item} />
        </li>
    );
    });
    return <ul className="movie-list">
        {movieInfo}
    </ul>
    }
};

export default MovieList;