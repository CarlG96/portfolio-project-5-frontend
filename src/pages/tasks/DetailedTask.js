import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Accordion,
  Alert,
  Button,
  Card,
  Container,
  Form,
} from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const DetailedTask = (props) => {
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [changeDate, setChangeDate] = useState(false);
  const [removeChangeDateButton, setRemoveChangeDateButton] = useState(false);
  const { is_owner, taskPage } = props;

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
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history]);

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEdit = () => {
    setIsDisabled(false);
  };

  const handleChangeDate = () => {
    setChangeDate(true);
    setRemoveChangeDateButton(true);
  };

  const handleDelete = () => {
    try {
      axiosReq.delete(`/tasks/${id}`);
      history.replace(`/currenttasks`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

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
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            value={priority}
            disabled={isDisabled}
            onChange={handleChange}
            className="text-center"
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

          {changeDate ? (
            <Form.Control
              type="datetime-local"
              name="due_date"
              defaultValue={due_date}
              disabled={isDisabled}
              onChange={handleChange}
              className="text-center"
            ></Form.Control>
          ) : (
            <Form.Control
              type="text"
              className="text-center"
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
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            name="state"
            value={state}
            disabled={isDisabled}
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
        <Card className="text-center">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Delete Task?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Button variant="danger" onClick={handleDelete}>
                Delete Item
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
  // // the .. needs to replace with edit and delete capability.
  // {is_owner && taskPage && "..."}
  // </div>;
};

export default DetailedTask;
