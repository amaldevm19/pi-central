import React from 'react';
import DigitalSensorCard from '../cards/DigitalSensorCard';

function DigitalSensor(props) {
  return(
    props.sensors.map((sensor, key)=><DigitalSensorCard key={key} sensor={sensor}/>)
  )

}

export default DigitalSensor;
