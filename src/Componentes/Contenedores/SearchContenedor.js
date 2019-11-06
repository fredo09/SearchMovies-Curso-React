import React, { Component } from 'react';

const API_KEY = 'c15fc3';

class SearchForm extends Component {

    state = { inputMovie: '' };

    _handleOnChange = (e) => {
        this.setState({ inputMovie: e.target.value });
    }

    _handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const { inputMovie } = this.state;
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then( res => res.json() )
            .then( data => {
                const { Search = [], totalResults = "0"  } = data;
                console.log({ Search , totalResults });
                this.props.onResults(Search);
            });    
    }

    render(){
        return(
            <form onSubmit={this._handleOnSubmit}>
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            onChange={this._handleOnChange}
                            placeholder="Search Movie..."/>
                    </p>
                    <p className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </p>
                </div>
            </ form>
        );
    }
}

export default SearchForm;