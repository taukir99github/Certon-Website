// CustomHeroSection.js
import React from "react";
import "./CustomHeroSection.css";
import fff from "../../Images/Hitech.svg";

const CustomHeroSection = ({ title, p, image }) => {
  return (
    <div className="service-container-hero">
      <div className="service-container-hero-image">
        <div className={`hero-logo ${image}`}></div>
      </div>
      <div className="hitech-text">
        <h1>{title}</h1>
      </div>
      <div className="service-container-hero-text">
        <p>{p}</p>
      </div>
    </div>
  );
};

export default CustomHeroSection;
