import React from "react";
import "./Market.css";
import MarketLogo from "../../Images/MarketLogo.svg";
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";
const Market = () => {
  return (
    <div>
      <CustomUppersection
        title={"  We Research the Market and Develop Winning Strategies"}
        image={"service-image-9"}
      />
      <OurService
        image={<img src={MarketLogo} />}
        title={"Market Research and Analysis"}
        p={`A proper winning strategy for a brand is researching the market and its continuous analysis. Our experts help in researching the market to identify the areas to be improved.
  `}
      />

      <CustomContainerlower
        title={"This is What We Do ?"}
        imageText={[
          "Market Segmentation",
          "Competitors Analysis",
          "Customer Analysis",
          "Product & Pricing Analysis",
        ]}
      />

      <CustomLowerPart
        image={"lower-image"}
        title={" We Start with Research"}
        p={`
        Our industry experts use advanced technologies and the latest statistics to analyze the market and then make proper interpretations to become successful.        `}
      />

      <OneLineDiv />
    </div>
  );
};

export default Market;
