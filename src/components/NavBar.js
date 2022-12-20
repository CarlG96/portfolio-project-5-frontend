import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../assets/taskosaurus-logo.png';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar className={`${styles.NavBar}`} expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home"a><img src={logo} alt="logo" height="100" width="100"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><i className="fas fa-home"></i>Home</Nav.Link>
            <Nav.Link><i className="fa-sharp fa-solid fa-list-check" />Current Tasks</Nav.Link>
            <Nav.Link><i className="fa-sharp fa-solid fa-vault" />Archived Tasks</Nav.Link>
            <Nav.Link><i className="fas fa-solid fa-pen" />Create Task</Nav.Link>
            <Nav.Link><i className="fas fa-sign-in" />Sign In</Nav.Link>
            <Nav.Link><i className="fas fa-user-plus" />Sign Up</Nav.Link>
            <Nav.Link><i className="fa-sharp fa-solid fa-arrow-right-from-bracket" />Logout</Nav.Link>
            <Nav.Link><i className="fa-solid fa-address-card" />Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
