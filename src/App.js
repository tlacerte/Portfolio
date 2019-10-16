import React from 'react';
//import { Router, Route, Switch } from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'

library.add(fab)

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
