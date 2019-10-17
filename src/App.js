import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'

library.add(fab)

class App extends Component {
  render(){
  return (
    <div className="App">
        <Nav />
        <Switch>
            <Route exact path='/' render={() =>
              <Home />
            }/>
            <Route exact path='/about' render={() =>
              <AboutMe />
            }/>
        </Switch>
      </div>
    );
  }
}

export default App;
