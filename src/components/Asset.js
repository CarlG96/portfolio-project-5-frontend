import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Asset = ({ spinner, src, message }) => {
  return (
    <Container className={`p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </Container>
  );
};

export default Asset;