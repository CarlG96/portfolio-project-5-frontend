import React from "react";
import { Form } from "react-bootstrap";

const PostCreateForm = () => {

  //creates date of tomorrow to ensure validation
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);


  return (
    <Form>
        <Form.Group controlId="title">
            <Form.Label className="d-none">Title</Form.Label>
            <Form.Control type="text"
            name="title"
            placeholder="Title"
            >

            </Form.Control>
        </Form.Group>
        <Form.Group controlId="dueDate">
            <Form.Label className="d-none">Due date</Form.Label>
            <Form.Control type="datetime-local"
            name="dueDate"
            >

            </Form.Control>
        </Form.Group>
      <Form.Group controlId="priority">
        <Form.Label className="d-none">Priority</Form.Label>
        <Form.Control as="select"
        name="priority">
          <option>Must Do</option>
          <option>Might Do</option>
          <option>Can Do</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label className="d-none">Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" placeholder="Description"/>
      </Form.Group>
    </Form>
  );
};

export default PostCreateForm;
