import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import "./style.css";
import { validateEmail } from "../../utils/helpers";

// export default function Contact() {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         return name === "fullName" ? setFullName(value) : name === "email" ? setEmail(value) : setMessage(value);
//     }
const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        name.value = "";
        email.value = "";
        message.value = "";
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <Container className="container-center">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <h2 className="about-title">Get in Touch</h2>
                    <p>Please email me at nicolepingar@gmail.com or send me a message by filling out the form below:</p>
                    <Form.Group as={Col} lg={6} sm={12} className="mb-3">
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control type="text" id="name" />
                    </Form.Group>
                    <Form.Group as={Col} lg={6} sm={12} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control type="email" id="email" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} id="message" required />
                </Form.Group>
                <Form.Group> <button className="button6" target="_blank" rel="noopener" type="submit">{status}</button></Form.Group>
            </Form>
        </Container>
    )
}

export default Contact;