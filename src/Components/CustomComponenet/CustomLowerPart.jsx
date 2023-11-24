import React from "react";
import Zoom from "react-reveal/Zoom";
import Bounce from 'react-reveal/Bounce';

const CustomLowerPart = ({ p, image, button  , title}) => {
  return (
    <div>
      <div className={`service-container-lower-pt-3 ${image}`}>
        <div className={`service-container-lower-pt-3-image `}>
          <div className="service-container-lower-pt-3-text">
            <zoom Top>
            <h1>{title}</h1>
            </zoom>
            <zoom Top>
            <p>{p}</p>
            </zoom>
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
