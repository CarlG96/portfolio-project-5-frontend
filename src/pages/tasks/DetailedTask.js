import React, { useEffect, useState } from "react";
import moment from "moment";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import btnStyles from "../../styles/Button.module.css";
import genericStyles from "../../styles/GenericStyles.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import NoResults from "../../components/NoResults";
import Asset from "../../components/Asset";

/*
 * Component used to display task detail views
 * No parameters.
 */

const DetailedTask = () => {
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [changeDate, setChangeDate] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [removeChangeDateButton, setRemoveChangeDateButton] = useState(false);
  const [deleteAccordionOpen, setDeleteAccordionOpen] = useState(false);
  const [unauthorised, setUnauthorised] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [taskData, setTaskData] = useState({
    description: "",
    due_date: "",
    priority: "",
    state: "",
    title: "",
  });
  const { description, due_date, priority, state, title } = taskData;

  
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/${id}`);
        const { title, description, due_date, priority, state } = data;
        setTaskData({
          title,
          description,
          due_date,
          priority,
          state,
        });
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
        if (err.response.status === 404) {
          setUnauthorised(true);
        }
      }
    };
    setHasLoaded(false);
    handleMount();
  }, [history, unauthorised, id]);

  // Handles changes on the form.
  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  // Allows enabling of the form from its disabled state.
  const handleEdit = () => {
    setIsDisabled(false);
  };

  // Allows changing of the date, this is separate due to value/defaultValue weirdness.
  const handleChangeDate = () => {
    setChangeDate(true);
    setRemoveChangeDateButton(true);
  };

  // Handles changing of text on opening and closing form.
  const handleAccordion = () => {
    setDeleteAccordionOpen(!deleteAccordionOpen);
  };

  // Handles deletion of the event.
  const handleDelete = () => {
    try {
      axiosReq.delete(`/tasks/${id}`);
      history.replace(`/currenttasks`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  // Handles submission of the form, allowing a put request to the backend.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("priority", priority);
    formData.append("due_date", moment(due_date).format("YYYY-MM-DDThh:mm"));
    formData.append("state", state);
    try {
      await axiosReq.put(`/tasks/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      history.replace(`/currenttasks`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className={`${genericStyles.DeleteForm} mt-3 mb-3`}>
      {unauthorised ? (
        <NoResults message="Task not available" />
      ) : hasLoaded ? (
        <>
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
                placeholder="Title"
                defaultValue={title}
                disabled={isDisabled}
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
                defaultValue={description}
                placeholder="Description here"
                disabled={isDisabled}
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
                value={priority}
                disabled={isDisabled}
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

              {changeDate ? (
                <Form.Control
                  type="datetime-local"
                  name="due_date"
                  defaultValue={due_date}
                  disabled={isDisabled}
                  onChange={handleChange}
                  className={`text-center ${genericStyles.GenericField}`}
                ></Form.Control>
              ) : (
                <Form.Control
                  type="text"
                  className={`text-center ${genericStyles.GenericField}`}
                  name="due_date"
                  onChange={handleChange}
                  defaultValue={due_date}
                  disabled
                ></Form.Control>
              )}
            </Form.Group>
            {errors?.due_date?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="state">
              <Form.Label className={genericStyles.GenericHeader}>
                State
              </Form.Label>
              <Form.Control
                as="select"
                name="state"
                value={state}
                disabled={isDisabled}
                onChange={handleChange}
                className={`text-center ${genericStyles.GenericField}`}
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
            {isDisabled ? (
              <></>
            ) : (
              <Button
                type="submit"
                className={`${btnStyles.Button} ${btnStyles.Bright}`}
              >
                Save
              </Button>
            )}
          </Form>
          {isDisabled ? (
            <Button
              onClick={handleEdit}
              className={`${btnStyles.Button} ${btnStyles.Bright}`}
            >
              Edit Task?
            </Button>
          ) : !isDisabled && !removeChangeDateButton ? (
            <Button
              onClick={handleChangeDate}
              className={`${btnStyles.Button} ${btnStyles.Bright}`}
            >
              Change Date?
            </Button>
          ) : (
            <></>
          )}
          <Accordion className="mt-3">
            <Card className={`text-center ${genericStyles.DeleteAccordion}`}>
              <Card.Header
                className={`text-center mt-3 ${genericStyles.WarningField}`}
              >
                <Accordion.Toggle
                  onClick={handleAccordion}
                  as={Button}
                  variant="danger"
                  eventKey="0"
                >
                  {deleteAccordionOpen ? `Close Delete` : `Delete Task?`}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Button variant="danger" onClick={handleDelete}>
                    Confirm Deletion
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default DetailedTask;
