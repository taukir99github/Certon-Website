import React from "react";
import styles from "./Why.module.css";
import Fade from 'react-reveal/Fade'
import "./why.css"
export const Why = () => {
  const categories = [
    {
      cate: "Support and Assistance",
      category: "Men",
      imgUrl: "why1",
    },
    {
      cate: "A Team of Expertss",
      category: "Womens",
      imgUrl: "why2",
    },
    {
      cate: "Result-Driven Approach",
      category: "Kids",
      imgUrl: "why3",
    },
    {
      cate: "Proven and Consistent Track Records",
      category: "all",
      imgUrl: "why4",
    },
  ];

  return (
    <>
      <div className={styles.bgss}>
        <div className={styles.gap}>
          <h1 className={styles.heading}>Why Certon? </h1>
          <p className={styles.hea}>
            We begin by conducting a thorough analysis, followed by delivering
            tailored solutions. <br /> This approach is the key to your success.
          </p>
        </div>

        <div className={styles["login-new"]}>
          <a
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />

          <section className={styles.heroSection}>
            <div className={styles.cardGrid}>
              <Fade Top>
              {categories.map((cat) => (
                <>
                  {" "}
                  <Fade Top>
                    <div className={styles.card}>
                      <div
                        className={`${styles.cardBackground} ${cat.imgUrl }`}
                        
                      ></div>
                      <div className={styles.cardContent}>
                        <p className={styles.cardCategory}>{cat.cate}</p>
                      </div>
                    </div>
                  </Fade>
                </>
              ))}
              </Fade>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
