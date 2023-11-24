import React from "react";
import "./Hitechmart.css";
import CustomeService from "./CustomComponenet/CustomService";
import CustomUppersection from "./CustomComponenet/CustomUppersection";
import CustomHeroSection from "./CustomComponenet/CustomHeroSection";
import CustomContainerlower from "./CustomComponenet/CustomContainerlower";
import CustomLowerPart from "./CustomComponenet/CustomLowerPart";
import Hitech from "../Images/Hitech.svg"
import Zoom from 'react-reveal/Zoom';

const About = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <CustomUppersection
      
        title={"Quality, Service & Diversity are Assured"}
        image={"top-image"}
      />
      <CustomHeroSection
        image={"heroSection_logo"}
        // icon={<img src={Hitech}/>}
        title={"Hitech Mart"}
        p={`HiTec Mart is a wholesale B2B marketplace in India that offers a
      bulk supply of different categories of various garments and
      footwear for men, women, and kids.HiTec Mart provides all the
      categories associated with men's, women's, and kid's fashion. It
      also provides Wholesale, Retail, and Delivery Franchise
      opportunities to individuals and one can choose these based on
      their budget.`}
      />
      <CustomeService
        title={"What makes HiTec Mart different"}
        para={`HiTec Mart stands as a unique platform for growth and success, setting us apart in the dynamic business landscape.  Our strong support system for franchise partners ensures a
              collaborative and thriving environment.`}
        image={[
          "first-card",
          "second-card",
          "third-card",
          "fourth-card",
          "fifth-card",
        ]}
      />
      <CustomContainerlower
        title={"Why Hitech Mart ?"}
        imageText={[
          "Driving business growth and expansion",
          "Offer a wide range of product categories",
          "Quality and trust",
          "Complete support and assistance",
          "Quick doorstep delivery",
        ]}
      />

      <CustomLowerPart
        image={"lower-image"}
        p={`  Our deep focus on collaboration, reliability, and continuous
      improvement is what truly makes HiTec Mart stand out as a leader
      in the industry. Discover the HiTec Mart difference and
      transform your business journey today.`}
        button={"To know More"}
      />
    </div>
  );
};

export default About;
