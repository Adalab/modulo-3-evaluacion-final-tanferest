import MovieItem from "./MovieItem";

function MovieList (props) {
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

export default MovieList;