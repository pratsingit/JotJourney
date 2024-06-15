import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

  const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <Container className="mt-5 text-center">
          <Row>
            <Col>
              <h1 className="fade-in">Welcome to the Ultimate Itinerary Planner</h1>
              <p className="fade-in delay-1">Plan and jot down your travel tasks efficiently.</p>
              <Button variant="primary" as={Link} to="/tasks" className="fade-in delay-2">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
