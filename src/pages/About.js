import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">About Me</h1>
            <div className="about-content">
              <p>
                Hello! I'm <span className="highlight">Pratyush Chowdhury</span>,
                a front-end developer based in India. <br></br>I'm passionate about building user-friendly and responsive web applications.
                I have experience with JavaScript, React.js, Node.js, MongoDB, and more.
              </p>
              <p>
                In addition to coding, I enjoy exploring new technologies and contributing to open-source projects.
                I believe in continuous learning and improving my skills to stay updated with industry trends.
              </p>
              <p>
                Feel free to connect with me on <a href="https://www.linkedin.com/in/pratyushchowdhury/" className="link">LinkedIn</a>
                {' '}or check out my <a href="https://github.com/pratsingit" className="link">GitHub</a> profile.
                <br></br>Thank you for your time and consideration!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;