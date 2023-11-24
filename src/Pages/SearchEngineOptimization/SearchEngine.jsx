import React from 'react'
import "./SearchEngine.css"
import searchlogo from "../../Images/SeachLogo.svg"
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const SearchEngine = () => {
  return (
    <div style={{overflow:"hidden"}}>
        <CustomUppersection
        title={" We Develop Result-Oriented SEO Strategies"}
        image={"service-image-12"}
      />
      <OurService
        image={<img src={searchlogo} />}
        title={"Search Engine Optimization"}
        p={`Certon, as the best SEO company in India, offers various strategic SEO services for businesses to improve their search engine rankings, organic traffic, and online visibility.
        `}
      />

<CustomContainerlower
        title={"This is What We Do"}
        imageText={[
          "Website Audit and Analysis",
          "Website Audit and Analysis",
          "Keyword research and optimization",
          "Content Optimization",
          "Off-Page optimization",
        ]}
      />
       <CustomLowerPart
        image={"lower-image"}
        title={"Rank Your Websites on the Top"}
        p={`

        Our SEO professionals develop result-oriented SEO strategies, that help to rank the websites at the top of the search engine results page.
        `}
      />

      <OneLineDiv />
    </div>
  )
}

export default SearchEngine
