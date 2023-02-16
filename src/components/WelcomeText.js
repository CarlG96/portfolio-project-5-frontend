import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../styles/WelcomeText.module.css";
import { Link } from "react-router-dom";
import btnStyles from "../styles/Button.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Asset from "./Asset";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/*
 * Component used in conjunction with the HeroImage component to create the
 * landing page. One-time-use component added to its own file for ease of
 * readability elsewhere and to allow ease of applying CSS rules to the
 * component.
 */

const WelcomeText = () => {
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);

useEffect(() => {
  const timeOut = setTimeout(() => {
    setHasLoaded(true);
  }, 500)
  setHasLoaded(false);
  return () => clearTimeout(timeOut);
}, [currentUser]);

  return (
    <div className={styles.WelcomeText}>
      <h1 className={styles.Header}>Welcome to Taskosaurus!</h1>
      <p className={styles.Paragraph}>
        Taskosaurus is an app that allows you to keep track of Tasks and Events.
        You can start by signing up and clicking on the <em>Create Task</em> or{" "}
        <em>Create Event</em> links. Your Tasks will be listed in the{" "}
        <em>Tasks</em> or <em>Events</em> sections. You can view a Task or Event
        from there by clicking on one. From there, you can update or delete your
        Tasks and Events. You can view archived Tasks or past Events by clicking
        the respective buttons in the <em>Tasks</em> and <em>Events</em>{" "}
        sections.
      </p>
      {hasLoaded ? (currentUser?.profile_id ? (
        <>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} mb-3`}
          >
            <Link className={btnStyles.Link} to="/createtask">
              Click here to create a Task!
            </Link>
          </Button>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} mb-3`}
          >
            <Link className={btnStyles.Link} to="/createevent">
              Click here to create an Event!
            </Link>
          </Button>
        </>
      ) : (
        <Button
          className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} mb-3`}
        >
          <Link className={btnStyles.Link} to="/signup">
            Click here to sign up!
          </Link>
        </Button>
      )) : (<Asset spinner />)}
    </div>
  );
};

export default WelcomeText;
