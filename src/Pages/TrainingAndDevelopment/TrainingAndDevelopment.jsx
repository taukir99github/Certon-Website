import React from "react";
import "./TrainingAndDevelopment.css"
import TrainingLogo from "../../Images/TrainingLogo.svg"
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const TrainingAndDevelopment = () => {
  return(
  
  <div>
  <CustomUppersection
        title={" Our Professional Training Creates a Better Organization"}
        image={"service-image-5"}
      />
      <OurService
        image={<img src={TrainingLogo} />}
        title={"Employee Training and Development"}
        p={`We give professional training to employees to upskill their talents through conducting workshops and by setting up various training modules.
  `}
      />

<CustomContainerlower
        title={"How You Benefit ?"}
        imageText={[
          "Increase Employee Performance",
          "Boost Employee Engagement",
          "Enhance Employee Confidence",
          "Timely Project Completion",
          "Organizational Growth",
        ]}
      />
        <CustomLowerPart
        image={"lower-image"}
        title={"We Guide You Properly "}
        p={`
        Our professional training covers all the areas including technical skill development, soft skill development, leadership skill development, etc. Overall, this training and development program improves organizational growth.
        s
        `}
      />

      <OneLineDiv />
    </div>

  
  )
};

export default TrainingAndDevelopment;
