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
 * allows creation of a task in the backend.
 */

const TaskCreateForm = () => {
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [errors, setErrors] = useState({});
  const [taskData, setTaskData] = useState({
    title: "",
    due_date: "",
    priority: "Must do",
    description: "",
  });
  const { title, due_date, priority, description } = taskData;
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
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles the submission of the form, allowing a post request to the backend.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("due_date", due_date);
    formData.append("priority", priority);
    formData.append("description", description);

    try {
      const { data } = await axiosReq.post("/tasks/", formData);
      history.push(`/tasks/${data.id}`);
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
          <Form.Group controlId="description">
            <Form.Label className={genericStyles.GenericHeader}>
              Description
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={description}
              placeholder="Description here"
              onChange={handleChange}
              className={`text-center ${genericStyles.GenericField}`}
            />
          </Form.Group>
          {errors?.description?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Group controlId="priority">
            <Form.Label className={genericStyles.GenericHeader}>
              Priority
            </Form.Label>
            <Form.Control
              as="select"
              name="priority"
              onChange={handleChange}
              className={`text-center ${genericStyles.GenericField}`}
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
            <Form.Label className={genericStyles.GenericHeader}>
              Due date
            </Form.Label>
            <Form.Control
              type="datetime-local"
              name="due_date"
              value={due_date}
              onChange={handleChange}
              className={`text-center ${genericStyles.GenericField}`}
            ></Form.Control>
          </Form.Group>
          {errors?.due_date?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button
            type="submit"
            className={`${btnStyles.Button} ${btnStyles.Bright}`}
          >
            Create Task
          </Button>
        </Form>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default TaskCreateForm;
