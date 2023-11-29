import React from 'react'
import "./Media.css"
import Medialogo from "../../Images/MediaLogo.svg"
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const Media = () => {
  return (
    <div style={{overflow:"hidden"}}>
           <CustomUppersection
        title={" We Effectively Make Use of Social Media Marketing"}
        image={"service-image-14"}
      />
      <OurService
        image={<img src={Medialogo} />}
        title={"Social Media Marketing"}
        p={`
        Social media has its own significance in today's digital landscape. As the best social media marketing company in India, we offer various strategic social media services to achieve marketing objectives.
        
        `}
      />

<CustomContainerlower
        title={"This is What We Do"}
        imageText={[
          "Social Media Strategy Planning",
          "Social Media Account Management",
          "Content Creation",
          "Social Media Advertising",
          "Social Media Analytics & Reporting",
        ]}
      />

<CustomLowerPart
        image={"lower-image"}
        hidebutton={true}
        title={"Move with Social Media Trends"}
        p={`

        Our social media experts are proficient in finding the latest trends and developments involved in various social media platforms. We effectively make use of this and build brand awareness and generate high-quality leads.
        `}
      />

p={`Start Building Your Future With Certon’s Social Media Marketing Services `}
<OneLineDiv 
      
      />
    </div>
  )
}

export default Media
