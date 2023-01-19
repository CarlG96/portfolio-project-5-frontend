import React, { useEffect, useState } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import ListViewItem from "../../components/ListViewItem";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import NoResults from "../../assets/no-results.png";
import { Col, Container, Row } from "react-bootstrap";
import Asset from "../../components/Asset";

const TasksPage = () => {
  const currentUser = useCurrentUser();
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathName } = useLocation();

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
  }, [pathName]);

  return (
    <Container fluid className="text-center">
      <Row className="mt-3 ml-3">
      {hasLoaded ? (
        tasks.results.length ? (
          tasks.results.map((task) => <ListViewItem {...task} key={task.id} />)
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
