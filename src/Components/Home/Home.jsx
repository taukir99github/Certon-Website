import React from "react";
import { Link } from "react-router-dom";
import header from "./Home.module.css";
import "slick-carousel/slick/slick.css";
import "./Home.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { cards } from "./BgImg/backGImg";
import HomeTopBack1 from "../../Images/HomeTopBack1.svg";
import HomeTopBack2 from "../../Images/HomeTopBack2.svg";
import { MdNavigateNext } from "react-icons/md";
import { Idea } from "./Ideas/Idea";
import { GlobalPg } from "./GlobalTouchPg/GlobalPg";
import { ContentHome1 } from "./ContentHome1/ContentHome1";
import { WhoWeAre } from "./WhoWeAre/WhoWeAre";
import { Why } from "./Why/Why";
import { ContentHome2 } from "./ContentHome2/ContentHome2";
import Logoslider from "./LogoSlider/LogoSlider";
import { OurServiceHome } from "./OurServHome/OurServiceHome";
import Fade from "react-reveal/Fade";
import CustomUppersection from "../CustomComponenet/CustomUppersection";
import CustomLowerPart from "../CustomComponenet/CustomLowerPart";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={header["control-btn"]} onClick={onClick}>
      <button className={header.next}>
        <MdNavigateNext className={header.icon} />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={header["control-btn"]} onClick={onClick}>
      <button className={header.prev}>
        <MdNavigateNext className={header.icon} />
      </button>
    </div>
  );
};

export const Home = () => {
  const settings = {
    dots: false,

    speed: 1000,
    autoplay: true,
    nextArrow: <></>,
    prevArrow: <></>,
    fade: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const cards = [
    {
      id: 1,
      image: "HomeTopBack1",
      heading: "The Future is All about Technology",
      content: "Start Your Journey Today",
    },
    {
      id: 2,
      image: "HomeTopBack2",
      heading: "Transforming Challenges into Opportunities",
      content: "Explore Your Opportunities Now",
    },
  ];
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={header.category1}>
        <Slider {...settings}>
          {cards.map((item) => (
            <CustomUppersection
              title={item.heading}
              p={item.content}
              image={item.image}
            />
          ))}
        </Slider>
        <Idea />
        {/* <GlobalPg /> */}
        <CustomLowerPart
          route={"/AboutUs"}
          title={"Experience a Global Touch"}
          p={`   We use the latest technology available in the market and keep up with industry advancements. As a top IT consulting and services company, we value our clients and serve transparent and sustainable support and assistance to maintain a long-term association with us.`}
          image={"HomeGlobalBack"}
          button={"Know more"}
        />
        <ContentHome1 />
        {/* <WhoWeAre /> */}
        <CustomLowerPart
          title={"Who We Are"}
          route={"/ContactUs"}
          p={`   Certon Technologies is one of the top IT consulting companies in
          India, headquartered in Pune, and a corporate office in Bangalore. We
          operate with high standards of refinement and advanced technology to
          serve our clients in the best possible way.We, as a reputed IT
          services company in Bangalore, offer other various services such as
          HR, Sales & Marketing, and Digital Marketing. Our professional team is
          skilled enough to serve you to achieve the best possible result to
          flourish your business.`}
          image={"bckground-global"}
          button={"Join Now"}
        />
        <Why />
        <ContentHome2 />
        <OurServiceHome />
        <Logoslider />
      </div>
    </div>
  );
};
