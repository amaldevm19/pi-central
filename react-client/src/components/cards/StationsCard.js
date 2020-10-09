import React from 'react';
import {Card, ListGroup, Accordion, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function CardText({sensors}){
    return(
    sensors.map((sensor, key)=>{
        return (
        <ListGroup.Item key={key} variant="success"><Card.Text>{sensor.sensor_name}: <FontAwesomeIcon icon={sensor.sensor_icon} className="ml-2"/><span className="float-right">{sensor.sensor_status}</span></Card.Text></ListGroup.Item>
        )
    })
    )
}

function StationsCard({station}) {
  return (
      <Accordion>
        <Card bg="success" text='white' className="mb-2">
            <Card.Header className="text-center">
            <Accordion.Toggle as={Button} variant="success" eventKey="0">
                <h3>{station.pi_name}</h3>
            </Accordion.Toggle>
            <Button variant="secondary" className="float-right mt-2">Sensors</Button>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            <ListGroup>
                <ListGroup.Item variant="success"><Card.Text>Current Status: <span className="float-right">{station.current_status}</span></Card.Text></ListGroup.Item>
                <ListGroup.Item variant="success"><Card.Text>Total Sensors: <span className="float-right">{station.sensors.length}</span></Card.Text></ListGroup.Item>
                <CardText sensors={station.sensors}/>
            </ListGroup>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
      </Accordion>
  );
}

export default StationsCard;