import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import logo from './logo.png'; 

const Header = () => {
  const location = useLocation();
  const isTasksPage = location.pathname === '/tasks';

  return (
    <Navbar expand="lg" className={`custom-navbar ${isTasksPage ? 'transparent-navbar' : ''}`}>
      <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
        <img src={logo} alt="Itinerary Planner" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link as={Link} to="/tasks" className="nav-link-custom">Tasks</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link-custom">About Me</Nav.Link>
          <Nav.Link as={Link} to="https://github.com/pratsingit/mtm-frontend-pratyush-chowdhury" className="nav-link-custom">Project's Github Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
