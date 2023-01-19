import React, { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/ListViewItem.module.css";

const ListViewItem = (props) => {
  const history = useHistory();
  const [viewTerms, setViewTerms] = useState("");

  const handleTaskView = () => {
    if (props.due_date) {
      history.push(`tasks/${props.id}`);
    } else {
      history.push(`events/${props.id}`);
    }
  };

  useEffect(() => {
    if (props.due_date) {
      setViewTerms("View Task");
    }
    else {
      setViewTerms("View Event");
    }
  }, []);

  return (
    
    <Col xs={12} md={6} lg={4} className={`${styles.ListViewItem} mt-2 pb-3`}>
      <h3 className={`text-center mt-3`}>{props.title}</h3>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
        onClick={handleTaskView}
      >
        {viewTerms}
      </Button>
    </Col>
    
  );
};

export default ListViewItem;
