import React from "react";
import "./Crm.css";
import crmlogo from "../../Images/CrmLogo.svg";
import CustomUppersection from "../../Components/CustomComponenet/CustomUppersection";
import OurService from "../../Components/CustomComponenet/ServiceComponents/OurService";
import CustomContainerlower from "../../Components/CustomComponenet/CustomContainerlower";
import CustomLowerPart from "../../Components/CustomComponenet/CustomLowerPart";
import OneLineDiv from "../../Components/CustomComponenet/OneLine/OneLineDiv";

const Crm = () => {
  return (
    <div>
      <CustomUppersection
        title={"We Help You to Maintain a Good Relationship with Your Customer"}
        image={"service-image-10"}
      />
      <OurService
        image={<img src={crmlogo} />}
        title={"CRM"}
        p={`Customer Relationship Management is an important area in marketing. By consolidating the customer data, We optimize the customer behavior and preferences that directly or indirectly affect the business growth.
        `}
      />


<CustomContainerlower
        title={"How Do We Manage ?"}
        imageText={[
          "Customer Data Management",
          "Customer Service",
          "Customer Support",
          "Sales Automation",
          "Advanced Analytics & Reporting",
        ]}
      />
       <CustomLowerPart
        image={"lower-image"}
        title={"We Connect You with Your Customers"}
        p={`
        At Certon, we understand the importance of an effective CRM system. Our system is designed to deliver the best services to our clients and it helps them to maintain their customers in the long term.        `}
      />

      <OneLineDiv />
    </div>
  );
};

export default Crm;
