import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ( props ) => {

    // Descomponenmos el Objeto Props
    const { id,title, poster, year } = props;

    return (
        <Link to={`/detail/${id}`} className="card">
            <div className="card-image">
                <figure className="image ">
                <img 
                    alt={ title }
                    src={ poster }
                />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">Nombre: { title }</p>
                        <p className="subtitle is-6">Año: { year }</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

MovieCard.propTypes = {
    id: PropTypes.string,
    poster : PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default MovieCard;