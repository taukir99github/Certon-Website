import React from "react";
import "./CustomUppersection.css";
// import { Reveal } from "react-reveal";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const CustomUppersection = ({ title, image }) => {
  return (
    <div>
      <div className={`image-container ${image}`}>
        
        <div className="image-container-text">
          <Zoom Top>
          <h1>{title}</h1>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default CustomUppersection;
