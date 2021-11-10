import React from "react";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import "./style.css";
// props come from pages > work.js
export default function ProjectCard(props) {
    return (
        <Col>
            <Card >
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <a href={props.repo} class="button6" target="_blank" rel="noopener">GitHub</a>
                    <a href={props.deployed} class="button6" target="_blank" rel="noopener">Deployed</a>
                </Card.Body>
            </Card>
        </Col>

    )
}