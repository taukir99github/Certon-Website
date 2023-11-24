import React from 'react'
import "./SalesSupport.css"
import SalesLogo from "../../Images/SalesLogo.svg"
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const SalesSupport = () => {
  return (
    <div style={{overflow:"hidden"}}>
       <CustomUppersection
        title={" We Know How to Effectively Convert Marketing into Sales"}
        image={"service-image-11"}
      />
      <OurService
        image={<img src={SalesLogo} />}
        title={"Sales Support"}
        p={`The success of an organization is based on the level of performance that is put forward. As a top global HR consultancy, we help organizations to design, develop and implement performance management systems
        `}
      />

<CustomContainerlower
        title={"This is What We Do"}
        imageText={[
          "Sales Proposal",
          "Sales Training",
          "Sales Performance Analysis",
          "Performance Evaluation",
          "Feedback & Coaching",
        ]}
      />

<CustomLowerPart
        image={"lower-image"}
        title={"We Show You How to Sell"}
        p={`
        Organizational success highly depends on the number of sales made. There are several factors to convert marketing into sales. Our experts know how to convert it effectively with minimal cost.  `}
      />

      <OneLineDiv />
    </div>
  )
}

export default SalesSupport
