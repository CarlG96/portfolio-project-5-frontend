import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css";

const EventCreateForm = () => {
  const [errors, setErrors] = useState({});
  const [eventData, setEventData] = useState({
    title: "",
    date_of_event: "",
    need_travel: false,
    money_required: 0,
  });

  const { title, date_of_event, need_travel, money_required } = eventData;
  const history = useHistory();
  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

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
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="text-center mt-3">
        <Form.Group controlId="title">
          <Form.Label className="d-none">Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
            className="text-center"
          ></Form.Control>
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="date_of_event">
          <Form.Label>Date of event</Form.Label>
          <Form.Control
            type="datetime-local"
            name="date_of_event"
            value={date_of_event}
            onChange={handleChange}
            className="text-center"
          ></Form.Control>
        </Form.Group>
        {errors?.date_of_event?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="money_required">
          <Form.Label>Amount of money required</Form.Label>
          <Form.Control
            type="number"
            name="money_required"
            value={money_required}
            onChange={handleChange}
            className="text-center"
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
            className="text-center"
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
    </Container>
  );
};

export default EventCreateForm;
