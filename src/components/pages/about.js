import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import nicole from "../../assets/nicole.jpg"
import "./style.css"

export default function About() {
    return (
        <Container className="about-container">
            <Row className="row-title justify-content-md-center">
                <Col className="about-title justify-content-md-center" lg="2">About Me</Col>
            </Row>
            <Row>
                <Col><Image className="nicole-pic" src={nicole} alt="Picture of Nicole Pingar" /></Col>
            </Row>
            <Row>
                <Col className="about-para">I am a Full Stack Web Developer with a professional background in Healthcare and Hospitality Management.  I have a Full Stack Web Development certificate from the University of Pennsylvania and a Bachelor of Science degree in Hospitality Management from Penn State.

                    After spending three years working in the healthcare industry, I decided I needed to make a career change and upon much research, I found coding. I quickly discovered a passion for web development, especially the logic and problem-solving aspects of it. My strengths include collaborating with other developers, high attention to detail and a great eye for design. I truly enjoy what I do and I am excited to see what the future holds.

                    My technical skills include React, JavaScript, jQuery, HTML, CSS, Handlebars, Node.js, Jest, Express.js, MySQL, NoSQL, MongoDB, Sequelize, and Express. Please navigate to the projects page to see my projects.

                    In my spare time, I enjoy exercising, traveling, watching Bravo, and spending time with friends and family.
                </Col>
            </Row>
        </Container >
    )

}