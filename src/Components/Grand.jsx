import React from "react";
import "./Grand.css";
import CustomUppersection from "./CustomComponenet/CustomUppersection";
import CustomHeroSection from "./CustomComponenet/CustomHeroSection";
import CustomService from "./CustomComponenet/CustomService";
import CustomContainerlower from "./CustomComponenet/CustomContainerlower";
import CustomLowerPart from "./CustomComponenet/CustomLowerPart";

const Grand = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <CustomUppersection
        title={" Start Your Career with Us"}
        image={"top-image-3"}
      />

      <CustomHeroSection
        image={"Grand-image"}
        p={`Job Tanks is one of the best job portals in India and has a strong database of multiple job opportunities for various company positions. The user-friendly interface and advanced search filters of Job Tanks help to search the job opportunities easily.
    `}
      />

      <CustomService
        title={"Our Featured Services"}
        para={`
      At Job Tanks, we are dedicated to helping you find the ideal career path you desire. Our featured services are designed to empower job seekers like you with the tools and techniques needed to succeed in today's competitive job market`}
        image={[
          "Grandcard1",
          "Grandcard2",
          "Grandcard3",
          "Grandcard4",
          "Grandcard5",
        ]}
      />
      <CustomContainerlower
        title={"Why Job Tanks ?"}
        imageText={[
          "Immense career opportunities",
          "User-friendly interface",
          "Advanced search filters",
          "Easy application process",
          "Active job  notifications",
        ]}
      />

      <CustomLowerPart
        image={"lower-image"}
        p={`Join Job Tanks today and unlock a world of opportunities that match your expectations and potential. Your dream job is just a click away.`}
        button={"To Know More"}
      />
    </div>
  );
};

export default Grand;
