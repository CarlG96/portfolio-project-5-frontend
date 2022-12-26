import React from 'react'
import styles from '../styles/HeroImage.module.css';

/* 
* Component used for the hero image on the landing page.
* Takes no parameters as it is a one-time use component only brought
* into it's own file for ease of reading the landing page code and to make 
* it easier for CSS rules to be applied.
*/

const HeroImage = () => {
  return (
    <div className={styles.HeroImage}>
        <div className={styles.Image}></div>
    </div>
  )
}

export default HeroImage