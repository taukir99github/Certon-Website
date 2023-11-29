import React from "react";
import "./FranchiseTank.css";
import CustomUppersection from "./CustomComponenet/CustomUppersection";

import CustomHeroSection from "./CustomComponenet/CustomHeroSection";
import CustomService from "./CustomComponenet/CustomService";
import CustomContainerlower from "./CustomComponenet/CustomContainerlower";
import CustomLowerPart from "./CustomComponenet/CustomLowerPart";

const FranchiseTank = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <CustomUppersection
        title={" Grow Your Brand with Franchise Tanks"}
        image={"top-image-2"}
      />
      <CustomHeroSection
        image={"FranchiseTank-hero-image"}
        p={`Franchise Tanks is an online platform that provides various franchise opportunities to individuals and it is the best platform for individuals who wish to start their own business. In Franchise Tanks you get an opportunity to find different established franchises and an opportunity to sell your franchise also.`}
      />
      <CustomService
        title={"What makes Franchise Tanks different"}
        para={`
      At Franchise Tanks, we understand that success is a collaborative effort. Our extensive network of experts, industry insights, and sophisticated strategies drive our partners towards achieving their entrepreneurial dreams.
      `}
        image={[
          "FranchiseCard1",
          "FranchiseCard2",
          "FranchiseCard3",
          "FranchiseCard4",
        ]}
      />

      <CustomContainerlower
        title={"Why franchise tank ?"}
        imageText={[
          "Extensive Franchise Listings",
          "Simplified Search Process",
          "Verified and Trustworthy Opportunities",
          "Expert Guidance and Resources",
          "Time and Cost Savings",
        ]}
      />

      <CustomLowerPart
        image={"lower-image"}
        route={"/AboutUs"}
        p={`We empower businesses with the resources they need to flourish, from established brand recognition to comprehensive guidance and support. Discover the Franchise Tanks difference and transform your business journey today.
      `}
        button={"To Know More"}
      />
    </div>
  );
};

export default FranchiseTank;
