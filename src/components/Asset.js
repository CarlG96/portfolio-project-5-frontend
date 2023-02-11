import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const Asset = ({ spinner, src, message }) => {
  return (
    <Container className={`p-4 text-center`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </Container>
  );
};

export default Asset;
