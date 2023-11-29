import React from "react";
import "./PerformanceManagement.css";
import Performancelogo from "../../Images/PerformanceLogo.svg";
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const PerformanceManagement = () => {
  return (
    <div>
      <CustomUppersection
        title={" Experience Our Cutting-Edge Software Solutions"}
        image={"service-image-5"}
      />
      <OurService
        image={<img src={Performancelogo} />}
        title={"Performance  Management"}
        p={`The success of an organization is based on the level of performance that is put forward. As a top global HR consultancy, we help organizations to design, develop and implement performance management systems
  `}
      />

      <CustomContainerlower
        title={"How Do We Manage  ?"}
        imageText={[
          "Setting a Goal",
          "Performance Planning",
          "Performance Monitoring",
          "Performance Evaluation",
          "Feedback & Coaching",
        ]}
      />
      <CustomLowerPart
        image={"lower-image"}
        hidebutton={true}
        title={"Thrives Your Employee Performance"}
        p={`At Certon, we believe that better performance comes only through proper planning and various activities. We achieve success by the blend of technology with strategies
        `}
      />

      <OneLineDiv
        p={`Start Building Your Future With Certon’s Performance  Management `}
      />
    </div>
  );
};

export default PerformanceManagement;
