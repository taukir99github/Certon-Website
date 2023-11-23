import React from "react";
import Star from "../../Images/star.svg";
import "./CustomContainerlower.css";
const CustomContainerlower = ({ title, imageText }) => {
  return (
    <div>
      <div className="service-container-lower-pt-2">
        <div className="service-container-lower-pt-2-h1">
          <h1>{title}</h1>
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
