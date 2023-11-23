import React from "react";
import "./CustomUppersection.css";
// import { Reveal } from "react-reveal";

const CustomUppersection = ({ title, image }) => {
  return (
    <div>
      <div className={`image-container ${image}`}>
        <div className="image-container-text">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default CustomUppersection;
