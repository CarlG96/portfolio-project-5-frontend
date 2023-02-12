import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

/*
 * Component which can be used to display spinners, messages
 * and images.
 * @param (bool) spinner: Whether to display spinner or not.
 * @param (string) src: Source for image.
 * @param (string) message: Message to display.
 */

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
