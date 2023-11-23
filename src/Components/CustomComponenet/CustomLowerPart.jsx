import React from "react";

const CustomLowerPart = ({ p, image, button }) => {
  return (
    <div>
      <div className={`service-container-lower-pt-3 ${image}`}>
        <div className={`service-container-lower-pt-3-image `}>
          <div className="service-container-lower-pt-3-text">
            <p>{p}</p>
            <div className="service-container-button">
              <button>{button}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLowerPart;
