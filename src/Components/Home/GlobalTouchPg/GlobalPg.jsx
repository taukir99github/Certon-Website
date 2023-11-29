import React from "react";
import styles from "./globalPg.module.css";
import Fade from "react-reveal/Fade";
import experiecebg from "../../../img/service/experiecebg.png";
import { Link } from "react-router-dom";
export const GlobalPg = () => {
  return (
    <div className={`${styles.main} shadow-inner `}>
      <div style={{ opacity: "0.2" }}>
        <img src={experiecebg} className="imge" alt="" />
      </div>

      {/* <div className={styles.imgediv}></div> */}
      <Fade bottom>
        <h1 className={styles.heading}>Experience a Global Touch</h1>
      </Fade>
      <Fade bottom>
        <p className={styles.content1}>
          We use the latest technology available in the market and keep up with
          industry advancements. As a top IT <br />
          consulting and services company, we value our clients and serve
          transparent and sustainable support and
          <br />
          assistance to maintain a long-term association with us.
        </p>
      </Fade>
      {/* <button className={styles.buttonglobal}> <Link to="/Contact">Join us Now</Link></button> */}
    </div>
  );
};
