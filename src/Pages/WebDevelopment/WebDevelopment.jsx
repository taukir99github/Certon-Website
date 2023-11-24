import React from "react";
import "./WebDevelopment.css";
import WebDevelopmentLogo from "../../Images/WebDevelopmentLogo.svg";
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import servicelogo from "../../Images/ServiceLogo.svg";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const WebDevelopment = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <CustomUppersection
        title={"We Deliver You the Quality and User-Friendly Websites"}
        image={"service-image-2"}
      />

      <OurService
        image={<img src={WebDevelopmentLogo} />}
        title={"Web Development"}
        p={`Certon Technologies is a reputable web development company in India. We specialize in developing quality and user-friendly websites for all business sizes. We have a team of highly experienced and professionally skilled developers, who are proficient enough in programming languages and technologies.
      `}
      />

      <CustomContainerlower
        title={"What We Offer ?"}
        imageText={[
          "Website Design and Development",
          "Front-end Development",
          "Back-end Development",
          "Website Maintenance and Support",
        ]}
      />

      <CustomLowerPart
        image={"lower-image"}
        title={"Experience Hassle-Free Websites"}
        p={`As a top web development company in Bangalore, we emphasize user experience(UX) and user interface(UI) design to develop an appealing and seamless website experience.`}
      />

      <OneLineDiv />
    </div>
  );
};

export default WebDevelopment;
