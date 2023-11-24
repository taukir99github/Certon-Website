import React from "react";
import "./Development.css";
import Developlogo from "../../Images/DevelopmentLogo.svg";
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const Development = () => {
  return (
    <div>
      <CustomUppersection
        title={"  Experience the Changes with Our OD Programmes"}
        image={"service-image-7"}
      />
      <OurService
        image={<img src={Developlogo} />}
        title={"Organizational Development"}
        p={`We help organizations to improve their effectiveness through organizational development programs. This involves various initiatives for overall organizational success.
  `}
      />

      <CustomContainerlower
        title={"How Do We Develop ?"}
        imageText={[
          "Organizational Culture Enhancement",
          "Effective Leadership Management",
          "Organizational Change Management",
          "Employee Engagement Activities",
        ]}
      />

      <CustomLowerPart
        image={"lower-image"}
        title={"Thrives Your Employee Performance "}
        p={`
        At Certon, we believe that better performance comes only through proper planning and various activities. We achieve success by the blend of technology with strategies        s
        `}
      />

      <OneLineDiv />
    </div>
  );
};

export default Development;
