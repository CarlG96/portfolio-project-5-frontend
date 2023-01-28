import React, { useState } from "react";
import moment from "moment";
import { Alert, Container, Form } from "react-bootstrap";
import { mockComponent } from "react-dom/test-utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

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
            value={title}
            // onChange={handleChange}
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
            value={description}
            placeholder="Description here"
            // onChange={handleChange}
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
            // onChange={handleChange}
            className="text-center"
            value={priority}
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
            value={moment(due_date).format("DD/mm/yyyy hh:mm")}
            disabled
          ></Form.Control>
          <p className="mt-3">Change Date?</p>
          <Form.Control
            type="datetime-local"
            name="due_date"
            value={due_date}
            // onChange={handleChange}
            className="text-center"
          ></Form.Control>
        </Form.Group>
        {errors?.due_date?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form>
    </Container>
  );
  // // the .. needs to replace with edit and delete capability.
  // {is_owner && taskPage && "..."}
  // </div>;
};

export default DetailedTask;
