import MovieItem from "./MovieItem";

function MovieList (props) {
    if (props.movies.length === 0) {
        return <p>Ningún título coincide con esta búsqueda. ¡Prueba otra vez!</p>;
    } else{
    const movieInfo = props.movies.map((item) => {
        return (
        <li key={item.id}>
            <MovieItem item={item} />
        </li>
    );
    });
    return <ul>
        {movieInfo}
    </ul>
    }
};

export default MovieList;