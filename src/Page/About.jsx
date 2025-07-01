import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";

const About = () => {
  return (
    <div className="about-page">
      <Navigation /> {/* Sidebar Include */}
      <Container className="about-content">
        <h1>About Our Shoe Store</h1>
        <p>We provide high-quality, stylish, and comfortable shoes for everyone.</p>

        <Row>
          <Col md={6}>
            <h2>Our Vision</h2>
            <p>To become the most trusted shoe brand </p>
          </Col>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>Providing top-notch quality, sustainable, and affordable footwear.</p>
          </Col>
        </Row>

        <h2>Customer Reviews</h2>
        <Row>
          <Col md={6}>
            <p>"Best shoes ever! Super comfortable and stylish!" - John Doe</p>
          </Col>
          <Col md={6}>
            <p>"Amazing quality and fast delivery!" - Sarah Lee</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
