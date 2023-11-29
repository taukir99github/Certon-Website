import React from "react";
import "./AppDevelopment.css";
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import AppLogo from "../../Images/AppDevelopmentLogo.svg";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const AppDevelopment = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <CustomUppersection
        title={"Experience Our Innovative and High-Quality Mobile Applications"}
        image={"service-image-3"}
      />
      <OurService
        image={<img src={AppLogo} />}
        title={"App Development"}
        p={`As a top mobile app development company, we focus on creating innovative and high-quality mobile applications for various businesses in different industries. Our highly skilled developers provide a high-quality and user-friendly product that supports both iOS and Android platforms.

      `}
      />

      <CustomContainerlower
        title={"What We Offer ?"}
        imageText={[
          "Custom App Development",
          "App Testing and Quality Assurance",
          "App Performance  Optimization",
          "App Security and Compliance",
          "App Maintenance and Support",
        ]}
      />

      <CustomLowerPart
        image={"lower-image"}
        hidebutton={true}
        title={"Ready to Use of diverse Applications?"}
        p={`Certon understands the importance of mobile applications in the current digital landscape. Our team uses sophisticated technology to develop the applications. That increases the downloads and helps to grow your business.
        `}
      />

      <OneLineDiv 
      p={`Start Building Your Future With Certon’s App Development Services `}
      />
    </div>
  );
};

export default AppDevelopment;
