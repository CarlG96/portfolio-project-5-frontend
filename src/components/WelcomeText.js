import React from 'react';
import styles from '../styles/WelcomeText.module.css';



const WelcomeText = () => {
  return (
    <div className={styles.WelcomeText}>
      <h1 className={styles.Header}>Welcome to Taskosaurus!</h1>
      <p className={styles.Paragraph}>
        Here
      </p>
    </div>
        
    
  )
}

export default WelcomeText