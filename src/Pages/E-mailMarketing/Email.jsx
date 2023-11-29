import React from "react";
import "./Email.css";
import Emaillogo from "../../Images/EmailLogo.svg";
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const Email = () => {
  return (
    <div>
      <CustomUppersection
        title={"  We offer You Effective Email Marketing Strategies"}
        image={"service-image-15"}
      />
      <OurService
        image={<img src={Emaillogo} />}
        title={"E-mail Marketing"}
        p={`
        Certon offers effective email marketing strategies that target the right audiences. This helps the brands to generate high-quality leads and maintain their customers in a long-term perspective.        
        `}
      />
      <CustomContainerlower
        title={"This is What We Do"}
        imageText={[
          "Email Campaign Strategy and Planningl",
          "Email Design",
          "Performance  Tracking & Reporting",
        ]}
      />
      <CustomLowerPart
        image={"lower-image"}
        hidebutton={true}
        title={"A Big Strategy for a Big Success"}
        p={`

        We offer the best email marketing services in India, Which helps to communicate effectively with the targeted audiences. This helps brands to increase their brand awareness and reaches a broader audience.
        `}
      />
      p={`Start Building Your Future With Certon’s E-mail Marketing Services `}
      <OneLineDiv />
    </div>
  );
};

export default Email;
