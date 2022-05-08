import '../styles/MovieDetail.scss'
import { Link } from 'react-router-dom';

function MovieDetail (props) {
    console.log(props)
    return (
        <article className="detail">
            <img className="detail__img" src={props.item.poster} alt={`${props.item.movie} poster`}/>
            <div className="detail_textbox">
                <h2 className="detail__title">{props.item.movie}</h2>
                <p className="detail__quote"> &#171;{props.item.fullLine}&#187;</p>
                <p className="detail__text"> <i className="fa-solid fa-clapperboard"></i> {`Director: ${props.item.director}`}</p>
                <a className="detail__link" href={props.item.audio} title="Ir al audio" target="_blank" rel="noreferrer"><i className="fa-solid fa-headphones"></i> Escuchar audio</a>
            </div>
            <Link className="detail__back" to="/"><i className="fa-solid fa-arrow-left-long"></i></Link>
        </article>
    )
}

export default MovieDetail;