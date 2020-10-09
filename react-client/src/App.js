import React , {useEffect, useState}from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

import Sensor from "./components/sensors/Sensor";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Stations from './components/stations/Stations';
import AboutPI from './components/about/AboutPI';


function App() {
  return (
    <Router>
      <Header/>
      <Container className="mt-5">
        <Switch>
          <Route path="/sensors">
            <Sensor/>
          </Route>
          <Route path="/stations">
            <Stations/>
          </Route>
          <Route path="/aboutpi">
            <AboutPI/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
