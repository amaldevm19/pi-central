import React , {useEffect, useState}from 'react';
import StationsCard from "../cards/StationsCard";


function Stations() {
  let [piData, setStations] = useState([]);
  
  useEffect(()=>{
    loadData();
    return ()=>{setStations([])}
  },[]);

  const loadData = async ()=>{
    const response = await fetch('http://localhost:4000/api/v1/pi-stations');
    const data = await response.json()
    // console.log(data)
    setStations([...data]);
  }
//This test log logs two times, one before the useEffect and one After the effect
  console.log("Sation component called")
  return (
    piData.map((station, key)=> <StationsCard station={station} key={key}/>)
  );
}

export default Stations;