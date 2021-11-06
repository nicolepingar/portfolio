import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css";


export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">NP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Me</Nav.Link>
                    <Nav.Link href="#link">My Work</Nav.Link>
                    <Nav.Link href="#link">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}