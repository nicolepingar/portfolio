import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css";
import ResumePDF from '../../assets/resume.pdf'


export default function Navigation() {
    return (
        <Navbar className="navbar-margin" expand="lg">
            <Navbar.Brand className="np">NP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/about"> About Me</Link>
                    <Link className="nav-item nav-link" to="/work">Projects</Link>
                    {/* <Link className="nav-item nav-link" to="/contact">Contact Me</Link> */}
                    <a className="nav-item nav-link" href={ResumePDF} target="_blank" rel="noopener">Resume</a>



                </Nav>
            </Navbar.Collapse>
            {/* <p><i className="fas fa-sun"></i></p> */}
            {/* <p className="toggle"><i className="fas fa-moon"></i></p> */}
        </Navbar >
    )
}