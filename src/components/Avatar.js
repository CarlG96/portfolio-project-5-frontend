import React from "react";
import styles from "../styles/Avatar.module.css";

/*
 * Component which displays the user's profile and name
 * @param (string) src: String representing the url of the user's image.
 * @param (number) height: Number used for both the height and width of the image.
 * @param (string) text: Used to display text to the right of the image.
 */

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="Profile avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;
