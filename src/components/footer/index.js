import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import PopoverBody from 'react-bootstrap/PopoverBody'
import PopoverHeader from 'react-bootstrap/PopoverHeader'
import Button from 'react-bootstrap/Button'
import ResumePDF from '../../assets/resume.pdf'
import "./style.css";
import { Container } from 'react-bootstrap';
// Bootstrap popover for phone number
const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">484-883-2574</Popover.Header>
    </Popover>
);
const Example = () => (
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
        <i variant="success" className="fas fa-phone"></i>
    </OverlayTrigger>
);

export default function Footer() {
    return (
        <Container className="footer justify-content-md-center">
            <Row >
                <Col className="padding-i"><a href="https://github.com/nicolepingar" target="_blank" rel="noopener"><i className="fab fa-github"></i></a></Col>
                <Col className="padding-i"><a href="mailto:nicolepingar@gmail.com" ><i className="fas fa-envelope"></i></a></Col>
                <Col className="padding-i"><a href="https://www.linkedin.com/in/nicolepingar/" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a></Col>
                <Col className="padding-i"><a href={ResumePDF} target="_blank" rel="noopener"><i className="fas fa-file-alt"></i></a></Col>
                <Col className="padding-i"><Example /></Col>
            </Row>
        </Container>
    )
}