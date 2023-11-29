// CustomHeroSection.js
import React from "react";
import "./CustomHeroSection.css";
import fff from "../../Images/Hitech.svg";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const CustomHeroSection = ({ title, p, image, imgTag }) => {
  return (
    <div className="service-container-hero">
      <div className="service-container-hero-image">
        {/* {imgTag ? { imgTag } : <div className={`hero-logo ${image}`}></div>} */}
        {imgTag || <div className={`hero-logo ${image}`}></div>}

      </div>
      <div className="hitech-text">
        <Zoom Top>
          <h1>{title}</h1>
        </Zoom>
      </div>
      <div className="service-container-hero-text">
        <Bounce Top>
          <p>{p}</p>
        </Bounce>
      </div>
    </div>
  );
};

export default CustomHeroSection;
