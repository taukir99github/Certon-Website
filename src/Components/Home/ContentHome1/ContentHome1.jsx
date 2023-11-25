import React from "react";
import styles from "./contentHome1.module.css";
import { Fade } from "react-reveal";

export const ContentHome1 = () => {
  return (
    <div className={styles.container}>
      <Fade bottom>
        <h1 className={styles.heading}>We Redefine Your Business </h1>
        <p className={styles.content}>
          Now, it's time to take your business journey to the next level
        </p>
      </Fade>
    </div>
  );
};
