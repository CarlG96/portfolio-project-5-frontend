import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../styles/Footer.module.css";
import genericStyles from "../styles/GenericStyles.module.css";

const Footer = () => {
  return (
    <footer>
      <Container fluid className={`text-center mt-2 ${styles.Footer}`}>
        <p className={genericStyles.GenericText}>Follow Taskosaurus at:</p>
        <Row>
          <Col xs={4}>
            <a
              href="https://twitter.com/?lang=en-gb"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Twitter Page"
            >
              <i className={`fa-brands fa-twitter ${genericStyles.GreenMediaLink}`}></i>
            </a>
          </Col>
          <Col xs={4}>
            <a
              href="https://en-gb.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Facebook Page"
            >
              <i className={`fa-brands fa-facebook-f ${genericStyles.GreenMediaLink}`}></i>
            </a>
          </Col>
          <Col xs={4}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Instagram Page"
            >
              <i className={`fa-brands fa-instagram ${genericStyles.GreenMediaLink}`}></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
