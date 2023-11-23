import React from "react";
import "./CustomService.css";

const CustomService = ({ title, para, image }) => {
  return (
    <div>
      <div className="service-container-lower">
        <div className="service-container-lower-h1">
          <h1>{title}</h1>
          <p>{para}</p>
        </div>
        <div className="service-container-lower-card">
          {image?.map((imageName, index) => (
            <div
              key={index}
              className={`service-container-lower-card card-design ${imageName}`}
              alt={`Image ${index + 1}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomService;
