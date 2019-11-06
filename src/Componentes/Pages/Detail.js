import React from 'react';
import PropTypes from 'prop-types';

import Button from './../Componentes/ButtoBackToHome';

const API_KEY = 'c15fc3';

class MovieDetail extends React.Component{
    static propTypes = {
        // Esto viene con el uso de Router de react-router-dom
        match: PropTypes.shape({
            params: PropTypes.object, // id que necesitamos que viene en la url
            isExact: PropTypes.bool, // Valor boleano que ve si la ruta es en si la exacta
            path: PropTypes.string, // Valor que se usa para ver la ruta
            url: PropTypes.string // valor de la url 
        })
    }

    state = { movie:{} }

    _fetch ({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then( res => res.json() )
            .then( movie => {
                console.log(movie);
                this.setState({ movie })
            });
    }

    // handlegoBack = () =>{
    //     window.history.back();
    // }

    componentDidMount(){
        const { id } = this.props.match.params;
        console.log(id);
        this._fetch({ id });
    }

    render(){
        const { Title, Actors, Poster, Director, Plot  } = this.state.movie;
        
        return (
            <div>
                <h1> { Title } </h1>
                <img src={ Poster } alt={ Title }/>
                <p>{ Actors }</p>
                <p>{ Director }</p>
                <p>{ Plot }</p>
                <Button />
            </div>
        )
    }
}

export default MovieDetail;