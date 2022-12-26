import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/taskosaurus-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

/*
* Component for the NavBar, takes no parameters 
* but does have logic defining what it displays based on whether
* the user is currently logged in or not. Also has logic to improve 
* the UX of the burger menu on smaller devices by retracting the burger menu 
* once a link has been selected or the user clicks off the burger menu.
*/

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch(err) {
      console.log(err);
    }
  }
  const loggedOutIcons = <>
<NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-sign-in" />
              Sign In
            </NavLink>
            <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-user-plus" />
              Sign Up
            </NavLink></>
  const loggedInIcons = <><NavLink to="/currenttasks" className={styles.NavLink} activeClassName={styles.Active}>
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
<NavLink exact to="/" className={styles.NavLink} onClick={handleSignOut}>
  <i className="fa-sharp fa-solid fa-arrow-right-from-bracket" />
  Logout
</NavLink>
<NavLink to={`/profiles/${currentUser?.profile_id}`} className={styles.NavLink} activeClassName={styles.Active}>
<Avatar src={currentUser?.profile_image} text="Profile" height={30}/>
  
</NavLink></>

  return (
    <Navbar expanded={expanded} className={`${styles.NavBar}`} expand="md">
      <Container fluid>
        <NavLink to="/" className={styles.NavLink}>
          <Navbar.Brand >
            <img src={logo} alt="logo" height="100" width="100" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-home"></i>Home
            </NavLink>
            { currentUser ? loggedInIcons : loggedOutIcons }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
