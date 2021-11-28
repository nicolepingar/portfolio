import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import ProjectCard from "../project";
import projects from '../../projects.json';
import "./style.css";

export default class Work extends Component {
    state = { projects };
    render() {
        return (
            <Container className="projects-div">
                <Row md={12} className="justify-content-md-center project-header"><Col>Projects</Col></Row>
                <Row className="justify-content-md-center project-sub"><Col>Welcome to my sandbox, where I create functional and interactive web applications. <br></br>Please browse through the projects and explore the deployed links & github links.</Col></Row>
                <Row xs={1} md={2} className="g-4 justify-content-md-center">
                    {
                        this.state.projects.map(project => (
                            // project card exported to project > index.js
                            <ProjectCard
                                id={project.id}
                                key={project.id}
                                name={project.name}
                                image={process.env.PUBLIC_URL + project.image}
                                description={project.description}
                                tech={project.tech}
                                repo={project.repo}
                                deployed={project.deployed}
                            />
                        ))
                    }
                </Row>
            </Container >
        )
    }
}