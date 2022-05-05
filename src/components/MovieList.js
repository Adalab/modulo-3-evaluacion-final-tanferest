import MovieItem from "./MovieItem";

function MovieList (props) {
    const movieInfo = props.movies.map((item, index) => {
        return (
        <li key={index}>
            <MovieItem item={item} />
        </li>
        );
    });
    return <ul>
        {movieInfo}
    </ul>
}

export default MovieList;