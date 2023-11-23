import React from "react";
import "./OurService.css";
import ServiceImage from "../../../Images/ServiceLogo.svg";
const OurService = ({ image, title, p }) => {
  return (
    <div className="service">
      <div className="our-services-main">
        <div className="our-services-main-image">
          {/* <img src={ServiceImage} alt="" /> */}
          {image}
        </div>
        <div className="our-services-main-header">
          {/* <div>Software Development</div> */}
          <div>{title}</div>
        </div>
        <div className="our-services-main-para">
          {/* <div>
            We are one of the best software development companies in India
            delivering cutting-edge software solutions worldwide to various
            clients. As a top software company in Bangalore, we ensure to
            complete the projects in a timely manner and deliver maximum output
            to enrich your business..
          </div> */}
          <div>
            {p}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
