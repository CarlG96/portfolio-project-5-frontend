import React, { useEffect, useState } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import ListViewItem from "../../components/ListViewItem";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import NoResults from "../../components/NoResults";
import { Button, Col, Container, Row } from "react-bootstrap";
import Asset from "../../components/Asset";
import btnStyles from "../../styles/Button.module.css";
import genericStyles from "../../styles/GenericStyles.module.css";

const TasksPage = () => {
  const currentUser = useCurrentUser();
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathName } = useLocation();
  const [viewCurrentTasks, setViewCurrentTasks] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/`);
        if(viewCurrentTasks){
          data.results = data.results.filter((result) => {
            return result.state === "Current";
          })
        
        }
        else {
          data.results = data.results.filter((result) => {
            return result.state === "Archived";
          })
        }
        setTasks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchTasks();
  }, [pathName, viewCurrentTasks]);

  const handleSwitch = () => {
    setViewCurrentTasks(!viewCurrentTasks);
  };

  return (
    <Container fluid className={`text-center mt-3 mb-3 ${genericStyles.GenericForm}`}>
      <Row className="text-center">
        <Button
          className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
          onClick={handleSwitch}
        >
          {viewCurrentTasks ? `View Archived Tasks` : `View Current Tasks`}
        </Button>
      </Row>
      <Row className="mt-3">
        {hasLoaded ? (
          tasks.results.length ? (
            viewCurrentTasks ? (
              tasks.results.map((task) =>
                task.state === "Current" ? (
                  task.is_overdue? (<ListViewItem {...task} overdue={true}
                    key={task.id} />) : (<ListViewItem {...task}
                    key={task.id} />)
                ) : (
                  <React.Fragment key={task.id}></React.Fragment>
                )
              )
            ) : (
              tasks.results.map((task) =>
                task.state === "Archived" ? (
                  task.is_overdue? (<ListViewItem {...task} overdue={true}
                    key={task.id} />) : (<ListViewItem {...task}
                    key={task.id} />)
                  
                ) : (
                  <React.Fragment key={task.id}></React.Fragment>
                )
              )
            )
          ) : (
            <NoResults message="Tasks"/>
          )
        ) : (
          <Asset spinner />
        )}
      </Row>
    </Container>
  );
};

export default TasksPage;
