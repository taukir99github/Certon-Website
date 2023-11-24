import React from "react";
import "./OurService.css";
import ServiceImage from "../../../Images/ServiceLogo.svg";
import Zoom from "react-reveal/Zoom";
import Bounce from 'react-reveal/Bounce';
const OurService = ({ image, title, p }) => {
  return (
    <div className="service">
      <div className="our-services-main">
        <div className="our-services-main-image">
          <Bounce Top>
          {/* <img src={ServiceImage} alt="" /> */}
          {image}
          </Bounce>
        </div>
        <div className="our-services-main-header">
          {/* <div>Software Development</div> */}
          <Bounce Top>
          <div>{title}</div>
          </Bounce>
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
          <Bounce Top>
            {p}
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
