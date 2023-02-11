import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../styles/WelcomeText.module.css';
import { Link } from 'react-router-dom';
import btnStyles from '../styles/Button.module.css';

/*
* Component used in conjunction with the HeroImage component to create the
* landing page. One-time-use component added to its own file for ease of 
* readability elsewhere and to allow ease of applying CSS rules to the
* component.
*/

const WelcomeText = () => {
  return (
    <div className={styles.WelcomeText}>
      <h1 className={styles.Header}>Welcome to Taskosaurus!</h1>
      <p className={styles.Paragraph}>
        Taskosaurus is an app that allows you to keep track of any sort of task that you want.
        You can start by signing up and creating a task that needs doing. Your tasks will be listed in the <em>Current Tasks</em> section.
        You can view a task from here by clicking on one. Once in the <em>Task View</em> you'll be able to update, delete or mark your tasks as complete.
        Completing a task sends it to the <em>Archived Tasks</em> section, so you never forget what you've done!
      </p>
      <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} mb-3`}>
        <Link className={btnStyles.Link} to="/signin">Click here to sign up!</Link>
      </Button>
    </div>
        
    
  )
}

export default WelcomeText