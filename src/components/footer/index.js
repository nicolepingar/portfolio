import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import "./style.css";
import { Container } from 'react-bootstrap';


export default function Footer() {
    return (
        <Row className="footer">
            <Col xs={2} className="padding-i"><i className="fab fa-github"></i></Col>
            <Col xs={2} className="padding-i"><i className="fas fa-envelope"></i></Col>
            <Col xs={2} className="padding-i"><i className="fab fa-linkedin"></i></Col>
            <Col xs={2} className="padding-i"><i className="far fa-file"></i></Col>
        </Row>
    )
}