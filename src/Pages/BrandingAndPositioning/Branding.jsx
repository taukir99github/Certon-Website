import React from 'react'
import "./Branding.css"
import brandinglogo from "../../Images/BrandingLogo.svg"
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const Branding = () => {
  return (
    <div>
       <CustomUppersection
        title={"   We Make a Brand Unique and Visible in the Market"}
        image={"service-image-8"}
      />
      <OurService
        image={<img src={brandinglogo} />}
        title={"Branding and Positioning"}
        p={`As a top brand marketing strategist, Certon understands the importance of branding and positioning to make a brand unique and visible in the market.  Our strategies are focused and result oriented, which helps brands to go beyond their competitors.
  `}
      />

<CustomContainerlower
        title={"This is What We Do"}
        imageText={[
          "Brand Strategy Development",
          "Brand Identity Design",
          "Brand Positioning",
          "Digital Branding",
        ]}
      />

<CustomLowerPart
        image={"lower-image"}
        title={"We Know How to Brand Your Business "}
        p={`
        We design strategies for brands based on the service and the targeted audience they are focused on. This helps them to build a strong foundation for long-term success.        `}
      />

      <OneLineDiv />

    </div>
  )
}

export default Branding
