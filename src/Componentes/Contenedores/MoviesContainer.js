import React, { Component } from 'react';
import MovieCard from './../Componentes/CardMovieLayout';

class MovieContainer extends Component {
    render() {
        console.log( this.props);
        const { id ,poster, title, year } = this.props;

        return(
            <MovieCard
                id={id} 
                poster={ poster }
                title={title}
                year={year}
            />
        );
    }
}

export default MovieContainer;