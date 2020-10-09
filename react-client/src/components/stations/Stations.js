import React , {useEffect, useState}from 'react';
import StationsCard from "../cards/StationsCard";
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://127.0.0.1:4000");



function CardCre({stations}){
  return(
  stations.map((station, key)=>{
    return <StationsCard station={station} key={key}/>
   })
  )
}
function Stations() {
  let [stations, setStations] = useState([]);
  socket.on("PI_STATION_UPDATED", (data)=>{
    console.log(data)
  })
  useEffect(()=>{
    fetch('http://localhost:4000/api/v1/pi-stations').then(response => response.json()).then(data => {
      setStations([...data]);
    });
    return ()=>{setStations([])}
  },[])
  return (
    <CardCre stations={stations}/>
  );
}

export default Stations;