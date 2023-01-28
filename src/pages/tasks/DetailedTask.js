import React, { useState } from "react";
import moment from "moment";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { mockComponent } from "react-dom/test-utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DetailedTask = (props) => {
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [changeDate, setChangeDate] = useState(false);
  const [removeChangeDateButton, setRemoveChangeDateButton] = useState(false);
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

  const history = useHistory();

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
    title: title,
  });

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
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("priority", priority);
    formData.append("due_date", due_date);
    formData.append("state", state);

    try {
      const { data } = await axiosReq.put(`/tasks/${id}`, formData);
      history.push(`/tasks/${id}`);
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
            disabled={isDisabled}
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

          {changeDate? (
            <Form.Control
            type="datetime-local"
            name="due_date"
            defaultValue={due_date}
            disabled={isDisabled}
            onChange={handleChange}
            className="text-center"
          ></Form.Control>
          ): (<Form.Control
            type="text"
            className="text-center"
            name="due_date"
            defaultValue={moment(due_date).format("DD/mm/yyyy hh:mm")}
            disabled
          ></Form.Control>)} 
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
      ) : (
        <Button
          onClick={handleChangeDate}
          className={`${btnStyles.Button} ${btnStyles.Bright}`}
        >
          Change Date?
        </Button>
      )}
    </Container>
  );
  // // the .. needs to replace with edit and delete capability.
  // {is_owner && taskPage && "..."}
  // </div>;
};

export default DetailedTask;
