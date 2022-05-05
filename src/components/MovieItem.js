import '../styles/MovieItem.scss'

function MovieItem (props) {
    return (<>
    <img className="movie_img" src={props.item.poster} alt={`${props.item.movie} poster`}/>
    <h2>{props.item.movie}</h2>
    <p>&#171;{props.item.fullLine}&#187;</p>
    <p>{props.item.year}</p>

    </>)
};

export default MovieItem;