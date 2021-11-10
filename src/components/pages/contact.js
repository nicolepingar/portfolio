import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from "react-bootstrap/Image";
import "./style.css"

export default function Contact() {
    return (
        <Container className="container-center">
            <Form>
                <Row className="mb-3">
                    <h2 className="about-title">Contact Me</h2>
                    <p>Please email me at nicolepingar@gmail.com or send me a message by filling out the form below:</p>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group> <button class="button6" target="_blank" rel="noopener">Submit</button>{' '}</Form.Group>
            </Form>
        </Container>
    )
}