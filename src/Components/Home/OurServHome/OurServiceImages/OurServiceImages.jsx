import React from "react";
import styles from "./Ourservice.module.css";
import Fade from "react-reveal/Fade";

function OurServiceImages() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.ourService}>OUR SERVICES </h1>
        </div>

        <div className={styles.imgediv}>
        <Fade delay={700} >
            <div className={styles.img1}>
              <h1 className={styles.headingtext}>IT service</h1>
            </div>{" "}
          </Fade>
        <Fade delay={700} >
            <div className={styles.img2}>
              <h1 className={styles.headingtext}>HR service</h1>
            </div>
          </Fade>
        </div>

        <div className={styles.imgediv}>
        <Fade delay={700} >
            <div className={styles.img3}>
              <h1 className={styles.headingtext}>Sales and Marketing</h1>
            </div>
          </Fade>
          <Fade delay={700} >
            <div className={styles.img4}>
              {" "}
              <h1 className={styles.headingtext}>Digital Marketing</h1>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default OurServiceImages;
