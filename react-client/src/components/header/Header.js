import React from 'react';
import {Navbar, Nav , Form, FormControl, Button, Dropdown} from "react-bootstrap";
import { Link} from "react-router-dom";

function Header(props) {
  return(
    <Navbar bg="success" expand="lg" variant="dark">
        <Link to="/">
      
            <img src="https://www.raspberrypi.org/app/uploads/2018/03/RPi-Logo-Reg-SCREEN.png" width="30" height="30" className="d-inline-block align-top mr-2" alt="My-Pi logo"/>
              MY-PI
         
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/stations" className="btn btn-success"> Stations</Link>
                  <Link to="/sensors" className="btn btn-success"> Sensors</Link>
                  <Link to="/aboutpi  " className="btn btn-success"> About MY-PI</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Account Login
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/login">Login</Dropdown.Item>
                <Dropdown.Item href="/register">Register</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> 
            </Navbar.Collapse>
            
    </Navbar>
  )

}

export default Header;