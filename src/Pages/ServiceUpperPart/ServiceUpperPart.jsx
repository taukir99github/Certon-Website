import React from "react";
import "./ServiceUpperPart.css";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import servicelogo from "../../Images/ServiceLogo.svg";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const ServiceUpperPart = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <CustomUppersection
        title={" Experience Our Cutting-Edge Software Solutions"}
        image={"service-image-1"}
      />
      <OurService
        image={<img src={servicelogo} />}
        title={"Software Development"}
        p={`We are one of the best software development companies in India delivering cutting-edge software solutions worldwide to various clients. As a top software company in Bangalore, we ensure to complete the projects in a timely manner and deliver maximum output to enrich your business..`}
      />
      <CustomContainerlower
        title={"What We Offer ?"}
        imageText={[
          "Custom Software Development",
          "Software Testing and  Quality Assurance",
          "Software Selection  & Implementation",
          "Database Management",
        ]}
      />

      <CustomLowerPart
        image={"lower-image"}
        
        hidebutton = {true}
        title={"Think Today and Act for Tomorrow"}
        p={`As the best software development company in India, we closely get in touch with our clients throughout the development, implementation, and testing of the software to meet the expectations of our clients.`}
      />
      <OneLineDiv 
      p={`Start Building Your Future With Certon’s Software Development Services`}/>
    </div>
  );
};

export default ServiceUpperPart;
