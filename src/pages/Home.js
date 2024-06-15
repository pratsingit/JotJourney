import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h1>Welcome to Itinerary Planner</h1>
          <p>Plan and manage your travel tasks efficiently.</p>
          <Button variant="primary" as={Link} to="/tasks">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
