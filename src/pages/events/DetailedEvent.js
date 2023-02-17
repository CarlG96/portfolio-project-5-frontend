import React, { useEffect, useState } from 'react'
import moment from 'moment';
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import btnStyles from "../../styles/Button.module.css";
import genericStyles from "../../styles/GenericStyles.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Asset from '../../components/Asset';
import NoResults from '../../components/NoResults';

/*
* Component used to display event detail views. 
* No parameters.
*/

const DetailedEvent = () => {
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [changeDate, setChangeDate] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [removeChangeDateButton, setRemoveChangeDateButton] = useState(false);
  const [checked, setChecked] = useState(false);
  const [deleteAccordionOpen, setDeleteAccordionOpen] = useState(false);
  const [unauthorised, setUnauthorised] = useState(false)
  const { id } = useParams();
  const history = useHistory();
  const [eventData, setEventData]  = useState({
    title: "",
    date_of_event: "",
    need_travel: false,
    money_required: 0,
  })
  const { title, date_of_event, money_required } = eventData;

  // Handles lifecycle of component.
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/${id}`);
        const { title, date_of_event, need_travel, money_required } = data;

        setEventData({
          title, date_of_event, need_travel, money_required
        });
        setChecked(need_travel);
        setHasLoaded(true);
      } catch(err) {
        console.log(err);
        if(err.response.status === 404) {
          setUnauthorised(true);
        }
      }
    };
    setHasLoaded(false);
    handleMount();
  }, [history, unauthorised, id]);

  // Handles changes on the form.
  const handleChange = (event) => {
    setEventData({
      ...eventData,
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

  // Handles the checking of the need_travel part of form.
  const handleCheck = () => {
    setChecked(!checked);
  }

  // Handles changing of text on opening and closing form.
  const handleAccordion = () => {
    setDeleteAccordionOpen(!deleteAccordionOpen);
  }

  // Handles deletion of the event.
  const handleDelete = async() => {
    try {
      await axiosReq.delete(`/events/${id}`);
      history.replace(`/currentevents`);
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
    formData.append("date_of_event", moment(date_of_event).format("YYYY-MM-DDThh:mm"));
    formData.append("need_travel", checked);
    formData.append("money_required", money_required);
    try {
      await axiosReq.put(`/events/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      history.replace(`/currentevents`);
    } catch(err) {
      // console.log(err);
      if(err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }  
  };

  return (
    <Container className={`${genericStyles.DeleteForm} mt-3 mb-3` }>
      {unauthorised ? (<NoResults message="Event not available" />) : (hasLoaded ? (<>
      <Form 
      onSubmit={handleSubmit} 
      className={`text-center mt-3 ${genericStyles.GenericText}`}>
        <Form.Group controlId="title">
          <Form.Label className={genericStyles.GenericHeader}>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title here"
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
        <Form.Group controlId="date_of_event">
          <Form.Label className={genericStyles.GenericHeader}>Date of event</Form.Label>
          {changeDate ? (
          <Form.Control
            type="datetime-local"
            name="date_of_event"
            defaultValue={date_of_event}
            disabled={isDisabled}
            onChange={handleChange}
            className={`text-center ${genericStyles.GenericField}`}
          ></Form.Control>
        ) : (
          <Form.Control
          type="text"
          className="text-center"
          name="date_of_event"
          onChange={handleChange}
          defaultValue={date_of_event}
          disabled>
          </Form.Control>
        )}
        </Form.Group>
        {errors?.date_of_event?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="money_required">
          <Form.Label className={genericStyles.GenericHeader}>Amount of money required</Form.Label>
          <Form.Control
            type="number"
            name="money_required"
            value={money_required}
            disabled={isDisabled}
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
            checked={checked}
            disabled={isDisabled}
            onClick = {handleCheck}
            label="Need to travel there?"
            className={genericStyles.GenericHeader}
          />
        </Form.Group>
        {errors?.need_travel?.map((message, idx) => (
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
        className={`${btnStyles.Button} ${btnStyles.Bright}`}>
          Edit Event?
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
          <Card.Header className={`text-center mt-3 ${genericStyles.WarningField}`}>
            <Accordion.Toggle onClick={handleAccordion} as={Button} variant="danger" eventKey="0">
            {deleteAccordionOpen? `Close Delete` : `Delete Event?`}
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
      </>) : (<Asset spinner />))}
    </Container>
  );
};

export default DetailedEvent;