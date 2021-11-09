import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import ResumePDF from '../../images/resume.pdf'
import "./style.css";
import { Container } from 'react-bootstrap';


export default function Footer() {
    return (
        <Container className="footer justify-content-md-center">
            <Row >
                <Col className="padding-i"><a href="https://github.com/nicolepingar" target="_blank" rel="noopener"><i className="fab fa-github"></i></a></Col>
                <Col className="padding-i"><a href="mailto:nicolepingar@gmail.com" ><i className="fas fa-envelope"></i></a></Col>
                <Col className="padding-i"><a href="https://www.linkedin.com/in/nicolepingar/" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a></Col>
                <Col className="padding-i"><a href={ResumePDF} target="_blank" rel="noopener"><i className="fas fa-file-alt"></i></a></Col>
            </Row>
        </Container>
    )
}