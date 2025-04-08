import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../files/logo.png';
import '../App.css';

const AppNavbar = ({ isSmallScreen }) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="fixed-top navbar-toggle" expanded={expanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className={isSmallScreen ? 'text-center logo-name' : 'text-lg-left'}>
          <img id="Logo" src={logo} className="logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="collapse-nav" onClick={handleNavbarToggle} />
        <Navbar.Collapse>
          <Nav className="ml-auto text-center">
            <Nav.Link
              className="mx-4"
              as={NavLink}
              to="/about"
              exact
              onClick={() => setExpanded(false)}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              className="mx-4"
              as={NavLink}
              to="/qualifications"
              exact
              onClick={() => setExpanded(false)}
            >
              Qualifications
            </Nav.Link>
            <Nav.Link
              className="mx-4"
              as={NavLink}
              to="/message"
              exact
              onClick={() => setExpanded(false)}
            >
              Message Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
