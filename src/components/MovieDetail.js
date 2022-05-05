function MovieDetail (props) {
    return (
        <article>
            <img className="movie_img" src={props.item.poster} alt={`${props.item.movie} poster`}/>
            <h2>{props.item.movie}</h2>
            <p>&#171;{props.item.fullLine}&#187;</p>
            <p>{`Director: ${props.item.director}`}</p>
            <a href={props.item.audio} title="Ir al audio" target="_blank" rel="noreferrer">Escuchar audio</a>
        </article>
    )
}

export default MovieDetail;