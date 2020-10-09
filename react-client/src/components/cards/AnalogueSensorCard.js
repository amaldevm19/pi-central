import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function AnalogueSensorCard({sensor}) {

    return (
        <div className="col-lg-4 col-sm-12 mt-3 ">
            <div className=" mx-auto card" style={{width: "18rem" ,height:"25rem"}}>
                <div className="card-body ">
                <div  style={{height:"4rem"}}>
                    <h5 className="card-title text-center">{sensor.sensor_name}</h5>
                    <h6 className="card-title text-center">{sensor.sensor_type} sensor</h6>
                </div>
                    <hr className={sensor.sensor_status ==="normal"? "bg-success":"bg-danger"}></hr>
                    <div className="row">
                        <div className="col-4">
                            <button type="button" className={sensor.sensor_status ==="normal"? "btn btn-outline-success":"btn btn-outline-danger"} >
                            <FontAwesomeIcon icon={sensor.sensor_icon} />
                            </button>
                        </div>
                        <div className="col-8" style={{height:"6rem"}}>
                            <p>Current {sensor.sensor_type} is {sensor.sensor_value}{sensor.sensor_uom}</p>
                           {/* {sensor_type==="temperature" && <a href="#" className="card-link">Farenheat</a>} */}
                        </div>
                    </div>
                    <hr className={sensor.sensor_status ==="normal"? "bg-success":"bg-danger"}></hr>
                    <p className={sensor.sensor_status ==="normal"? "card-text text-success":"card-text text-danger"}>Station status is {sensor.sensor_status}</p>
                    <button className={sensor.sensor_status ==="normal"? "btn btn-success disabled":"btn btn-danger"}>{sensor.sensor_status ==="normal"?"Normal":"Acknowledge alarm"}</button>
                    <hr className={sensor.sensor_status ==="normal"? "bg-success":"bg-danger"}></hr>
                    <a href="/trend" className="card-link">TREND LOG</a>
                </div>
            </div>
        </div>
    );
}

export default AnalogueSensorCard;
