import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About Me</h1>
          <p>This is the about page. You can add details about yourself here.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
