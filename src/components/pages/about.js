import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import nicole from "../../images/nicole.jpg"
import "./style.css"

export default function About() {
    return (
        <Container className="about-container">
            <Row>
                <Col className="about-title">About Me</Col>
            </Row>
            <Row>
                <Col><Image className="nicole-pic" src={nicole} alt="Picture of Nicole Pingar" /></Col>
            </Row>
            <Row>
                <Col className="about-para">I am a Full Stack Web Developer with a background in Healthcare and Hospitality Management.  I have a Full Stack Web Development certificate from the University of Pennsylvania and a Bachelor of Science in Hospitality Management from Penn State.

                    After spending three years working in the healthcare industry, I decided I needed to make a career change and upon much research, I found coding. I quickly discovered a passion for web development, especially the logic and problem-solving aspects of it. I truly enjoy what I do and I am excited to see what the future holds.

                    My technical skills include React, JavaScript, jQuery, HTML, CSS, Handlebars, Node.js, Jest, Express.js, MySQL, NoSQL, MongoDB, Sequelinze, and Express. Please see my projects here *****.

                    In my spare time, I enjoy exercising, traveling, watching Bravo, and spending time with friends and family.
                </Col>
            </Row>
        </Container >
    )

}