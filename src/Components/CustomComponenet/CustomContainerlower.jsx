import React from "react";
import Star from "../../Images/star.svg";
import "./CustomContainerlower.css";
import Zoom from "react-reveal/Zoom";
import Bounce from 'react-reveal/Bounce';
const CustomContainerlower = ({ title, imageText }) => {
  return (
    <div>
      <div className="service-container-lower-pt-2">
        <div className="service-container-lower-pt-2-h1">
          <Zoom Top>
          <h1>{title}</h1>
          </Zoom> 
        </div>
        <div className="service-container-lower-pt-2-small-card">
          {imageText.map((text, index) => (
            <div key={index} className="image-star">
              
              <div className="star-star">
                <img src={Star} alt="" />
              </div>
              <div className="star-text">
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomContainerlower;
