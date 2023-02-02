import React, { useEffect, useState } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import ListViewItem from "../../components/ListViewItem";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import NoResults from "../../assets/no-results.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import Asset from "../../components/Asset";
import btnStyles from "../../styles/Button.module.css";

const TasksPage = () => {
  const currentUser = useCurrentUser();
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathName } = useLocation();
  const [viewCurrentTasks, setViewCurrentTasks] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setHasLoaded(true);
        const { data } = await axiosReq.get(`/tasks/`);
        setTasks(data);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchTasks();
  }, [pathName, viewCurrentTasks]);

  const handleSwitch = () => {
    setViewCurrentTasks(!viewCurrentTasks);
  }

  return (
    <Container fluid className="text-center">
      <Row className="text-center">
        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
        onClick={handleSwitch}>
          {viewCurrentTasks ? (`View Archived Tasks`) : (`View Current Tasks`)}
        </Button>
      </Row>
      <Row className="mt-3">
      {hasLoaded ? (
        tasks.results.length ? (
          viewCurrentTasks ? (tasks.results.map((task) => task.state === "Current"? (<ListViewItem {...task} key={task.id} />) : (<></>))) : (
            tasks.results.map((task) => task.state === "Archived"? ((<ListViewItem {...task} key={task.id} />)) : (<></>))
          )
        ) : (
          <Asset spinner />
        )
      ) : (
        <Asset spinner />
      )}
      </Row>
    </Container>
  );
};

export default TasksPage;
