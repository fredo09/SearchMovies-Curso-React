import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieDetail from './Componentes/Pages/Detail';
import Home from './Componentes/Pages/Home';
import NotFound404 from './Componentes/Pages/NotFound';

import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        { /* SWITCH NOS SIRVE PARA VER QUE RUTA SE CUMPLE Y ROUTER HACEMOS REFERENCIA A LAS RUTAS */ }
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:id" component={MovieDetail} />
          <Route component={NotFound404}/> {/** Componente para parginas que no existan */}
        </Switch>
      </div>
    );
  }
}

export default App;
