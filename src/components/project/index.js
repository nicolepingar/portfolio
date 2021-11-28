import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import "./style.css";
// props come from pages > work.js
export default function ProjectCard(props) {
    return (
        <Container>
            <Col className="justify-content-md-center">
                <Card >
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text className={props.id}>
                            {props.tech}
                        </Card.Text>
                        <a href={props.repo} className="button6" target="_blank" rel="noreferrer">GitHub</a>
                        <a href={props.deployed} className="button6" target="_blank" rel="noreferrer">Deployed</a>
                    </Card.Body>
                </Card>
            </Col>
        </Container>

    )
}
// picture size 5:3