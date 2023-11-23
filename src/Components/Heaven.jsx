import React from "react";
import "./Heaven.css";

import CustomUppersection from "./CustomComponenet/CustomUppersection";
import CustomHeroSection from "./CustomComponenet/CustomHeroSection";
import CustomService from "./CustomComponenet/CustomService";
import CustomContainerlower from "./CustomComponenet/CustomContainerlower";
import CustomLowerPart from "./CustomComponenet/CustomLowerPart";

const Heaven = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <CustomUppersection
        title={" A Real Estate Platform for All Your Needs"}
        image={"top-image-4"}
      />

      <CustomHeroSection
        image={"Heaven-image"}
        p={`
      Grand Heavens is India's largest real estate website that connects buyers and sellers to fulfill their dreams. It's extensive with verified and trusted Property listings, a user-friendly interface, and professional assistance making Grand Heavens unique from others. We also provide services in home loans, interiors & furnishing, home construction, legal & registration.
      `}
      />

      <CustomService
        title={"We Serve You in These Ways"}
        para={`
      At Grand Heavens, our mission is to provide you with a luxury real estate experience that goes beyond your expectations. We understand that your search for the perfect gated community property is higher, and that's why we take the extra steps to smoothen your journey.
      `}
        image={["Heavencard1", "Heavencard2", "Heavencard3", "Heavencard4"]}
      />

      <CustomContainerlower
        title={"Why Grand Heavens ?"}
        imageText={[
          "Extensive Property Listings",
          "User-Friendly Interface",
          "Verified and  Trusted Listings",
          "Market Trends and Insights",
          "Professional Assistance",
        ]}
      />

<CustomLowerPart
        image={"lower-image"}
        p={`Experience the Grand Heavens difference and lift your luxury property journey to new heights. Your dream gated community property awaits.
        `}
        button={"To Know More"}
      />
    </div>
  );
};

export default Heaven;
