import React, {useState, useEffect} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faThermometerFull, faTint, faPlug, faCarBattery , faLightbulb} from '@fortawesome/free-solid-svg-icons'

import AnalogueSensor  from "./AnalogueSensor.js";
import DigitalSensor  from "./DigitalSensor";

library.add(fab, faThermometerFull, faTint, faPlug, faCarBattery, faLightbulb)

function Sensor() {
  const [analogue, setAnalogue] = useState([]);
  const [digital, setDigital] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/api/v1/analog').then(response => response.json()).then(data => {
        console.log(data)
        setAnalogue([...data]);
      });
    fetch('http://localhost:4000/api/v1/digital').then(response => response.json()).then(data => {
        console.log(data)
        setDigital([...data]);
    });
  },[])
  return (
    <div className="container container-lg">
      <h5>Control and Monitor @PI</h5>
      <div className="row justify-content-center">
      <AnalogueSensor sensors={analogue}/> 
      </div >
      <hr className="bg-success"/>
      <div className="row justify-content-center">
      <DigitalSensor sensors={digital}/>     
      </div >
    </div>
  );
}

export default Sensor;