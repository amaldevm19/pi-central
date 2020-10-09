import React from 'react';
import AnalogueSensorCard from '../cards/AnalogueSensorCard';


function AnalogueSensor(props) {
  return(
    props.sensors.map((sensor, key)=><AnalogueSensorCard key={key} sensor={sensor}/>)
  )

}

export default AnalogueSensor;
