import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <section id="hero__section" className="section">
      <Container fluid>
        <Row>
          <Col className="text__center">
            <p>Find Job, Employment, and Career Opportunities</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
