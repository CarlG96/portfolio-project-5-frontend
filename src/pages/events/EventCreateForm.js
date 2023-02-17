import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import genericStyles from "../../styles/GenericStyles.module.css";

/*
 * Component which is used to display form which
 * allows creation of an event in the backend.
 */

const EventCreateForm = () => {
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [errors, setErrors] = useState({});
  const [eventData, setEventData] = useState({
    title: "",
    date_of_event: "",
    need_travel: false,
    money_required: 0,
  });
  const { title, date_of_event, need_travel, money_required } = eventData;
  const history = useHistory();

  // Handles lifecycle of component.
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (currentUser) {
        setHasLoaded(true);
      } else {
        history.push("/");
      }
    }, 500);
    setHasLoaded(false);
    return () => clearTimeout(timeOut);
  }, [currentUser, history]);

  // Handles the changes on the form.
  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles submission of the form, allowing a post request to the backend.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date_of_event", date_of_event);
    formData.append("need_travel", need_travel);
    formData.append("money_required", money_required);
    try {
      const { data } = await axiosReq.post("/events/", formData);
      history.push(`/events/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className={`${genericStyles.GenericForm} mt-3 mb-3`}>
      {hasLoaded ? (
        <Form
          onSubmit={handleSubmit}
          className={`text-center mt-3 ${genericStyles.GenericText}`}
        >
          <Form.Group controlId="title">
            <Form.Label className={genericStyles.GenericHeader}>
              Title
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title here"
              value={title}
              onChange={handleChange}
              className={`text-center ${genericStyles.GenericField}`}
            ></Form.Control>
          </Form.Group>
          {errors?.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Group controlId="date_of_event">
            <Form.Label className={genericStyles.GenericHeader}>
              Date of event
            </Form.Label>
            <Form.Control
              type="datetime-local"
              name="date_of_event"
              value={date_of_event}
              onChange={handleChange}
              className={`text-center ${genericStyles.GenericField}`}
            ></Form.Control>
          </Form.Group>
          {errors?.date_of_event?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Group controlId="money_required">
            <Form.Label className={genericStyles.GenericHeader}>
              Amount of money required
            </Form.Label>
            <Form.Control
              type="number"
              name="money_required"
              value={money_required}
              onChange={handleChange}
              className={`text-center ${genericStyles.GenericField}`}
            />
          </Form.Group>
          {errors?.money_required?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Group controlId="need_travel">
            <Form.Check
              type="checkbox"
              label="Need to travel there?"
              name="need_travel"
              onChange={handleChange}
              className={`${genericStyles.GenericHeader} text-center`}
            />
          </Form.Group>
          {errors?.need_travel?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button
            type="submit"
            className={`${btnStyles.Button} ${btnStyles.Bright}`}
          >
            Create Event
          </Button>
        </Form>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default EventCreateForm;
