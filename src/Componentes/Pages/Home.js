import React from 'react';
import Title from './../Componentes/Titlelayout';
import SearchForm from './../Contenedores/SearchContenedor';
import AlertMessage from './../Componentes/AlertLayout';
import MovieList from './../Componentes/MovieListLayout';

class Home extends React.Component {
    state = { results : [], usedSearch :false }; 

    _handleResults = (results) => {
      this.setState({ results, usedSearch:true  });
    }
  
    _renderMessage = ( ) => {
      return this.state.results.length === 0 
              ?
              <AlertMessage  />
              :
              <MovieList  
               movies={this.state.results}
              /> 
    }

    render(){
        return(
            <div>
                <Title>
                Search Movies
                </Title> 
                <div className="SearchForm-Warpper">
                    <SearchForm onResults={this._handleResults}/>
                </div>
                <br/>
                {this.state.usedSearch 
                ?this._renderMessage(this.state.results) 
                : <small>Use the form for Search Movies</small>  
                } 
            </div>
        );
    }
}

export default Home;