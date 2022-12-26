import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/taskosaurus-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  // const loggedOutIcons = 
  // const loggedInIcons = 

  return (
    <Navbar className={`${styles.NavBar}`} expand="md">
      <Container fluid>
        <NavLink to="/" className={styles.NavLink}>
          <Navbar.Brand href="#home" a>
            <img src={logo} alt="logo" height="100" width="100" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink to="/currenttasks" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fa-sharp fa-solid fa-list-check" />
              Current Tasks
            </NavLink>
            <NavLink to="/archivedtasks" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fa-sharp fa-solid fa-vault" />
              Archived Tasks
            </NavLink>
            <NavLink to="/createtask" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-solid fa-pen" />
              Create Task
            </NavLink>
            <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-sign-in" />
              Sign In
            </NavLink>
            <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-user-plus" />
              Sign Up
            </NavLink>
            <NavLink to="/logout" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fa-sharp fa-solid fa-arrow-right-from-bracket" />
              Logout
            </NavLink>
            <NavLink to="/profile" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fa-solid fa-address-card" />
              Profile
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
