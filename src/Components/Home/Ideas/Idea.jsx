import React from "react";
import styles from "./idea.module.css";
import { BiWallet } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";




export const Idea = () => {

     const settings = {
       dots: false,
       fade: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay:true,
        nextArrow: <></>, // Set nextArrow to an empty component
    prevArrow: <></>,
     };


  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Fade bottom>
          <div className={styles.box1}>
            <BiWallet className={styles.styt} />
            <h2 className="font-bold text-white">Think the future</h2>
            <p className=" text-white font-thin">
              A better future <br /> awaits you
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles.box2}>
            {" "}
            <BsBookmarks className={styles.styt} />
            <h2 className="font-bold text-white">Innovations Start Here</h2>
            <p className=" text-white font-thin">
              Start your successful journey <br /> from Certon
              {/* <br />
              machines that launched. */}
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles.box3}>
            <FiUsers className={styles.styt} />
            <h2 className="font-bold text-white">Future Business Solutions</h2>
            <p className=" text-white font-thin">
              We identify your
              <br />
              areas of improvement.
            </p>
          </div>
        </Fade>
      </div>

      {/* 
responsive */}
      <div className={styles.mainDiv}>
        <Slider {...settings}>
          <div className={styles.box1mobile}>
            <BiWallet className={styles.iconMob} />
            <h2 className="font-bold text-white text-4xl ">Think the future</h2>
            <div className=" text-white font-thin text-3xl">
              A better future awaits you
            </div>
          </div>

          <div className={styles.d}>
            {" "}
            <BsBookmarks className={styles.iconMob} />
            <h2 className="font-bold text-white text-4xl">
              Innovations Start Here
            </h2>
            <div className=" text-white font-thin text-3xl">
              Start your successful journey <br /> from Certon
              {/* <br />
              machines that launched. */}
            </div>
          </div>

          <div className={styles.bofx3mob}>
            <FiUsers className={styles.iconMob} />
            <h2 className="font-bold text-white text-4xl">
              Future Business Solutions
            </h2>
            <div className=" text-white font-thin text-3xl">
              We identify your
              <br />
              areas of improvement.
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
