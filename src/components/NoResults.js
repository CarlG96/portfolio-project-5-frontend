import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "../styles/NoResults.module.css";

const NoResults = (props) => {
  return (
    <Container className={`text center mt-3 ${styles.NoResults}`}>
        <h1>No {props.message} of this type found!</h1>
    </Container>
  )
}

export default NoResults