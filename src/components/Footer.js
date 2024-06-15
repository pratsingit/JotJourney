import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const linkStyle = {
        color: 'red', 
        marginRight: '5px',
        marginLeft: '5px',
        textDecoration: 'none',
      };

    return (
    <footer className="bg-dark text-white py-2 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            &copy; 2024 My Trip Mates. Made by 
            <a href="https://www.linkedin.com/in/pratyushchowdhury/" style={linkStyle}>Pratyush Chowdhury</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

