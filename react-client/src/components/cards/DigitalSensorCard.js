import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function AlarmActionButton({sensor_status,sensor_mode, sensor_name }){
    if(sensor_mode === "relay"){
        if(sensor_status === "on"){
            return <button className="btn btn-danger">Turn Off {sensor_name}</button>
        }else{
            return <button  href="#" className="btn btn-success">Turn On {sensor_name}</button>
        }
    }else if(sensor_mode === "monitor"){
        if(sensor_status === "normal"){
            return <button className="btn btn-success disabled">{sensor_name} Normal</button>
        }else if(sensor_status === "alarm"){
            return <button className="btn btn-danger">Acknowledge Alarm</button>
        }else if(sensor_status === "warning"){
            return <button className="btn btn-warning">Reset Alarm</button>
        }
    }
}


function DigitalSensorCard({sensor}) {  
    return (
        <div className="col-lg-4 col-sm-12 mt-3 mb-3">
            <div className=" mx-auto card" style={{width: "18rem" ,height:"25rem"}}>
                <div className="card-body ">
                <div  style={{height:"4rem"}}>
                    <h5 className="card-title text-center">{sensor.sensor_name}</h5>
                    <h6 className="card-title text-center">Digital {sensor.sensor_type}</h6>
                </div>
                    <hr className={sensor.sensor_status ==="normal"? "bg-success":"bg-danger"}></hr>
                    <div className="row">
                        <div className="col-4">
                            <button type="button" className={sensor.sensor_status ==="normal"? "btn btn-outline-success":"btn btn-outline-danger"} >
                            <FontAwesomeIcon icon={sensor.sensor_icon} />
                            </button>
                        </div>
                        <div className="col-8" style={{height:"6rem"}}>
                            <p>present {sensor.sensor_mode.current_mode} {sensor.sensor_type} is {sensor.sensor_value}</p>
                           {/* {sensor_type==="temperature" && <a href="/trend" className="card-link">Farenheat</a>} */}
                        </div>
                    </div>
                    <hr className={sensor.sensor_status ==="normal"? "bg-success":"bg-danger"}></hr>
                    <p className={sensor.sensor_status ==="normal"? "card-text text-success":"card-text text-danger"}>{sensor.sensor_name} | {sensor.sensor_status}</p>
                    <AlarmActionButton sensor_status={sensor.sensor_status} sensor_mode={sensor.sensor_mode.current_mode} sensor_name={sensor.sensor_name}/>
                    <hr className={sensor.sensor_status ==="normal"? "bg-success":"bg-danger"}></hr>
                    <a href="/trend" className="card-link">TREND LOG</a>
                </div>
            </div>
        </div>
    );
}

export default DigitalSensorCard;
