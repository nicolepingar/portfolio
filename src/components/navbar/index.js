import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css";


export default function Navigation() {
    return (
        <Navbar className="navbar-margin" expand="lg">
            <Navbar.Brand className="np" href="#home">NP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-item" href="#link">About Me</Nav.Link>
                    <Nav.Link className="nav-item" href="#link">My Work</Nav.Link>
                    <Nav.Link className="nav-item" href="#link">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}