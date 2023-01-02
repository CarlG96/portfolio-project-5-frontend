import React, { useState } from "react";
import { Form } from "react-bootstrap";

const TaskCreateForm = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    dueDate: "",
    priority: "",
    description: "",
  });

  const { title, dueDate, priority, description } = taskData;

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Form>
      <Form.Group controlId="title">
        <Form.Label className="d-none">Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="dueDate">
        <Form.Label className="d-none">Due date</Form.Label>
        <Form.Control
          type="datetime-local"
          name="dueDate"
          value={dueDate}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="priority">
        <Form.Label className="d-none">Priority</Form.Label>
        <Form.Control as="select" name="priority" value={priority} onChange={handleChange}>
          <option>Must Do</option>
          <option>Might Do</option>
          <option>Can Do</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label className="d-none">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={description}
          placeholder="Description"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}

export default TaskCreateForm;
