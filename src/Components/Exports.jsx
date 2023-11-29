import React from "react";
import "./Exports.css";
import CustomUppersection from "./CustomComponenet/CustomUppersection";
import CustomHeroSection from "./CustomComponenet/CustomHeroSection";
import CustomContainerlower from "./CustomComponenet/CustomContainerlower";
import CustomLowerPart from "./CustomComponenet/CustomLowerPart";

const Exports = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <CustomUppersection
        title={" Experience Our Global Import-Export Services"}
        image={"top-image-5"}
      />
      <CustomHeroSection
        image={"Exports-image"}
        p={`Certon Exports is a global import-export company that gives out you the gateway to the global marketplace. They have strong partners globally and this facilitates seamless trade across borders easily. Their global network, quality services, on-time delivery, and customer-centric approach help clients to achieve sustained business growth.`}
      />

      <CustomContainerlower
        title={"Why Certon Exports ?"}
        imageText={[
          "Global Network",
          "Extensive Expertise",
          "Quality services",
          "On-Time Delivery",
          "Customer-Centric  Approach",
        ]}
      />
      <CustomLowerPart
        image={"lower-image"}
        route={"/AboutUs"}
        p={`Make Certon Exports your trusted partner for all your import-export operations. With us, your global business aspirations are within reach.`}
        button={"To Know More"}
      />
    </div>
  );
};

export default Exports;
