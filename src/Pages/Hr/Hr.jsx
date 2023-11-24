import React from "react";
import "./Hr.css";
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import HrLogo from "../../Images/HrLogo.svg";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const Hr = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <CustomUppersection
        title={"Identify The Right Talents through Us"}
        image={"service-image-4"}
      />
      <OurService
        image={<img src={HrLogo} />}
        title={"Talent Acquisition and Recruitment"}
        p={`We are one of the best software development companies in India delivering cutting-edge software solutions worldwide to various clients. As a top software company in Bangalore, we ensure to complete the projects in a timely manner and deliver maximum output to enrich your business..
  `}
      />

      <CustomContainerlower
        title={"How We Identify the right candidates ?"}
        imageText={[
          "Define Job Recruitments",
          "Candidate Sourcing",
          "Resume Screening",
          "Interviews",
          "Reference &  Background Checks",
        ]}
      />

      <CustomLowerPart
        image={"lower-image"}
        hidebutton={true}
        title={"Right Candidates Shape Your Organizations"}
        p={`Certon helps organizations to find the right candidates according to their requirements. If you want to maintain your company standards through your workforce, we are here to support you to identify the best.
        `}
      />

      <OneLineDiv />
    </div>
  );
};

export default Hr;
