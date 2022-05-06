import { Link } from 'react-router-dom';

import '../styles/MovieItem.scss'

function MovieItem (props) {
    return (<Link to={`/movie/${props.item.id}`}>
    <img className="movie_img" src={props.item.poster} alt={`${props.item.movie} poster`}/>
    <h2>{props.item.movie}</h2>
    <p>&#171;{props.item.fullLine}&#187;</p>
    <p>{props.item.year}</p>

    </Link>)
};

export default MovieItem;