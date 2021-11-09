import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import "./style.css";
import { Container } from 'react-bootstrap';


export default function Footer() {
    return (
        <Container className="footer justify-content-md-center">
            <Row >
                <Col className="padding-i"><a href="https://github.com/nicolepingar" target="_blank" rel="noopener"><i className="fab fa-github"></i></a></Col>
                <Col className="padding-i"><a href="mailto:nicolepingar@gmail.com" ><i className="fas fa-envelope"></i></a></Col>
                <Col className="padding-i"><a href="https://www.linkedin.com/in/nicolepingar/" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a></Col>
                <Col className="padding-i"><a href="https://docs.google.com/document/d/1P0FW8JKwZfem406qAqLxutIRgvENQ3VNIZuhuN2jRQs/edit?usp=sharing"
                    target="_blank" rel="noopener"><i class="fas fa-file-alt"></i></a></Col>
                <Col className="padding-i"><a href="./src/images/resume.pdf" target="_blank" rel="noopener"><i class="fas fa-file-alt"></i></a></Col>
            </Row>
        </Container>
    )
}