import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import btnStyles from "../styles/Button.module.css";

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
    <>
      <div>{props.title}</div>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
        onClick={handleTaskView}
      >
        {viewTerms}
      </Button>
    </>
  );
};

export default ListViewItem;
