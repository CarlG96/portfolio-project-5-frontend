import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import genericStyles from "../../styles/GenericStyles.module.css";
import axios from "axios";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { setTokenTimestamp } from "../../utils/utils";
import Asset from "../../components/Asset";

/*
 * Sign in form component for use on the sign in page. Takes no props
 * but handles the logic required to prevent ordinary form submission in order to not refresh the page.
 * Also handles errors and general layout of the form.
 */

const SignInForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { username, password } = signInData;
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
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles submission of the form.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className={`${genericStyles.GenericForm} mt-3 mb-3`}>
      {hasLoaded ? (
        <>
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
                name="username"
                value={username}
                placeholder="Type username here"
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className={genericStyles.GenericHeader}>
                Password
              </Form.Label>
              <Form.Control
                className={`text-center ${genericStyles.GenericField}`}
                type="password"
                name="password"
                value={password}
                placeholder="Type password here"
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign In
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
          <Link className={`${styles.Link} mt-3`} to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default SignInForm;
