import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css";


export default function Navigation() {
    return (
        <Navbar className="navbar-margin" expand="lg">
            <Navbar.Brand className="np">NP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/about"> About Me</Link>
                    <Link className="nav-item nav-link" to="/work">My Work</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact Me</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}