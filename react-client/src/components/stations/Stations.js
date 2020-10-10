import React , {useEffect, useState}from 'react';
import StationsCard from "../cards/StationsCard";


function Stations({piData}) {
  return (
    piData.map((station, key)=>{
      return <StationsCard station={station} key={key}/>
     })
  );
}

export default Stations;