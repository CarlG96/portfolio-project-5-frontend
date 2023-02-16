import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import genericStyles from "../../styles/GenericStyles.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";

/*
 * Signup form component for use on the signup page. Takes no props
 * but handles the logic required to prevent ordinary form submission in order to not refresh the page.
 * Also handles errors and general layout of the form.
 */

const SignUpForm = () => {
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  // Handles lifecycle of component.
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (currentUser) {
        history.push("/");
      } else {
        setHasLoaded(true);
      }
    }, 500);
    setHasLoaded(false);
    return () => clearTimeout(timeOut);
  }, [currentUser, history]);

  // Handles changes on the form.
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles submission of the form.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className={`${genericStyles.GenericForm} mt-3 mb-3`}>
      {hasLoaded ? (
      <Form
        onSubmit={handleSubmit}
        className={`text-center mt-3 ${genericStyles.GenericText}`}
      >
        <Form.Group controlId="username">
          <Form.Label className={genericStyles.GenericHeader}>
            Username
          </Form.Label>
          <Form.Control
            className={`text-center ${genericStyles.GenericField}`}
            type="text"
            placeholder="Type username here"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="password1">
          <Form.Label className={genericStyles.GenericHeader}>
            Password
          </Form.Label>
          <Form.Control
            className={`text-center ${genericStyles.GenericField}`}
            type="password"
            placeholder="Type password here"
            name="password1"
            value={password1}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password1?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="password2">
          <Form.Label className={genericStyles.GenericHeader}>
            Confirm password
          </Form.Label>
          <Form.Control
            className={`text-center ${genericStyles.GenericField}`}
            type="password"
            placeholder="Type password here again"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password2?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Button
          className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
          type="submit"
        >
          Sign Up
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning" className="mt-3">
            {message}
          </Alert>
        ))}
        <Link className={`${styles.Link} mt-3`} to="/signin">
          Already have an account? <span>Sign in</span>
        </Link>
      </Form>) : (<Asset spinner />)}
    </Container>
  );
};

export default SignUpForm;
