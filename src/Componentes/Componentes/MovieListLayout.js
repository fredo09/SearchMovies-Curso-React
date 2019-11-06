import React from 'react';
import PropTypes from 'prop-types';
import MovieContainer from './../Contenedores/MoviesContainer';

const MovieList = (props) => {
    
    const { movies } = props;

    return(
        <div className="MovieList container" >
            {
                movies.map((movie,idx) => {
                    return (
                        <div key={idx} className="MovieList-item" >
                            <MovieContainer 
                                id={movie.imdbID}
                                poster={ movie.Poster }
                                title={ movie.Title }
                                year={ movie.Year }
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array
} 


export default MovieList;