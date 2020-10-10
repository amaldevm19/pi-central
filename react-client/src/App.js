import React , {useEffect, useState}from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

import Sensor from "./components/sensors/Sensor";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Stations from './components/stations/Stations';
import AboutPI from './components/about/AboutPI';
// import socketIOClient from "socket.io-client";
// const socket = socketIOClient("http://127.0.0.1:4000/?group=user_station");




function App() {
  
  // socket.on("pi_cov_from_server", (datafrompi)=>{
  //   console.log(datafrompi)
  // })
  console.log("App Component called")
  return (
    <Router>
      <Header/>
      <Container className="mt-5">
        <Switch>
          <Route path="/sensors">
            <Sensor/>
          </Route>
          <Route exact path="/stations">
            <Stations />
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
