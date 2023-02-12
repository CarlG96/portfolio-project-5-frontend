import React from "react";
import Container from "react-bootstrap/Container";
import styles from "../styles/NoResults.module.css";

/*
 * Component which shows up if for any reason results can't be
 * returned from the backend.
 * @ param (string) props.message: Prop given as a string to display to the user.
 */

const NoResults = (props) => {
  return (
    <Container className={`text-center mt-3 ${styles.NoResults}`}>
      <h1>{props.message}</h1>
    </Container>
  );
};

export default NoResults;
