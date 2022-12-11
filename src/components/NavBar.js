import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../assets/taskosaurus-logo.png';

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home"a><img src={logo} alt="logo" height="100" width="100"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Current Tasks</Nav.Link>
            <Nav.Link>Archived Tasks</Nav.Link>
            <Nav.Link>Create Task</Nav.Link>
            <Nav.Link>Sign In</Nav.Link>
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link>Logout</Nav.Link>
            <Nav.Link>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
