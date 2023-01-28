import React, { useState } from "react";
import moment from "moment";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { mockComponent } from "react-dom/test-utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";

const DetailedTask = (props) => {
  const [errors, setErrors] = useState({});
  const {
    date_created,
    date_updated,
    description,
    due_date,
    id,
    is_overdue,
    is_owner,
    owner,
    priority,
    state,
    title,
    taskPage,
  } = props;

  const [taskData, setTaskData] = useState({
    date_created: date_created,
    date_updated: date_updated,
    description: description,
    due_date: due_date,
    id: id,
    is_overdue: is_overdue,
    is_owner: is_owner,
    owner: owner,
    priority: priority,
    state: state,
    title: title
  });

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {};

  const currentUser = useCurrentUser();
  return (
    <Container>
      <Form onSubmit={handleSubmit} className="text-center mt-3">
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={title}
            onChange={handleChange}
            className="text-center"
          ></Form.Control>
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            defaultValue={description}
            placeholder="Description here"
            onChange={handleChange}
            className="text-center"
          />
        </Form.Group>
        {errors?.description?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="priority">
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            name="priority"
            onChange={handleChange}
            className="text-center"
            defaultValue={priority}
          >
            <option value="Must do">Must do</option>
            <option value="Might do">Might do</option>
            <option value="Can do">Can do</option>
          </Form.Control>
        </Form.Group>
        {errors?.priority?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="due_date">
          <Form.Label>Due date</Form.Label>

          <Form.Control
            type="text"
            className="text-center"
            defaultValue={moment(due_date).format("DD/mm/yyyy hh:mm")}
            disabled
          ></Form.Control>
          <p className="mt-3">Change Date?</p>
          <Form.Control
            type="datetime-local"
            name="due_date"
            defaultValue={due_date}
            onChange={handleChange}
            className="text-center"
          ></Form.Control>
        </Form.Group>
        {errors?.due_date?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
          as="select"
          name="state"
          defaultValue={state}
          onChange={handleChange}
          className="text-center"
          >
            <option value="Current">Current</option>
            <option value="Archived">Archived</option>
          </Form.Control>
        </Form.Group>
        {errors?.state?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Button
            type="submit"
            className={`${btnStyles.Button} ${btnStyles.Bright}`}
          >
            Edit Task?
          </Button>
      </Form>
    </Container>
  );
  // // the .. needs to replace with edit and delete capability.
  // {is_owner && taskPage && "..."}
  // </div>;
};

export default DetailedTask;
