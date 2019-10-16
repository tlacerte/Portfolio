import React from 'react';
//import { Router, Route, Switch } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import AboutMe from './components/AboutMe'

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
