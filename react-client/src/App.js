import React , {useEffect, useState}from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

import Sensor from "./components/sensors/Sensor";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Stations from './components/stations/Stations';
import AboutPI from './components/about/AboutPI';
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://127.0.0.1:4000/?group=user_station");

socket.on("pi_cov_from_server", (data)=>{
  console.log(data)
})


function App() {
  let [piData, setStations] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/api/v1/pi-stations').then(response => response.json()).then(data => {
    setStations([...data]);
    });
    return ()=>{setStations([])}
  },[])

  return (
    <Router>
      <Header/>
      <Container className="mt-5">
        <Switch>
          <Route path="/sensors">
            <Sensor/>
          </Route>
          <Route path="/stations">
            <Stations piData={piData} />
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
