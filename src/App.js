import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import Proyeccion from './components/Proyeccion';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" key="home" component={props => <Home></Home>}></Route>
            <Route exact path="/proyeccion" key="home" component={props => <Proyeccion></Proyeccion>}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
