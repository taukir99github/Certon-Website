import React from "react";
import styles from "./Ourservice.module.css";
import Fade from "react-reveal/Fade";
import dfjs from "../../../../Images/OurServiceIt.svg";
import "./OurServices.css";

function OurServiceImages() {
  return (
    <div>
      <div className="OurServices-content">
        <div className="OurServices-head">Our Services</div>
        <div className="OurServices-image-content">
          <Fade delay={700}>
            <div className="OurServices-card1 OurServices-card"></div>
          </Fade>
          <Fade delay={700}>
            <div className="OurServices-card2 OurServices-card"></div>
          </Fade>
        </div>
        <div className="OurServices-image-content">
          <Fade delay={700}>
            <div className="OurServices-card3 OurServices-card"></div>
          </Fade>
          <Fade delay={700}>
            <div className="OurServices-card4 OurServices-card"></div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default OurServiceImages;
