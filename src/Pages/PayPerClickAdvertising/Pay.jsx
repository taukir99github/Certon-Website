import React from 'react'
import "./Pay.css"
import Paylogo from "../../Images/PayLogo.svg"
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const Pay = () => {
  return (
    <div style={{overflow:"hidden"}}>
          <CustomUppersection
        title={" We Run Ads within the Budget and Generate High-Quality Leads"}
        image={"service-image-13"}
      />
      <OurService
        image={<img src={Paylogo} />}
        title={"Pay Per Click Advertising"}
        p={`PPC in digital marketing has its own importance to generate leads. Certon Technologies offers various PPC advertising services on different platforms to reach the target audiences to achieve the desired results.
        `}
      />

<CustomContainerlower
        title={"How Do We Manage"}
        imageText={[
          "Campaign Strategy and Planning",
          "Keyword Research and Selection",
          "Ad Campaign Setup and Management",
          "Bid Management and Optimization",
          "A/B Testing",
        ]}
      />
        <CustomLowerPart
        image={"lower-image"}
        hidebutton={true}
        title={"Only an Expert Knows How to Generate Quality Leads"}
        p={`

        As Google ads experts in India, we run ads within the budget and generate high-quality leads. This helps our clients to achieve their goals within a specific time frame.        `}
      />

      <OneLineDiv />
    </div>
  )
}

export default Pay
