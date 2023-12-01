import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ScrollMemory from 'react-router-scroll-memory';

import Hitechmart from "./Components/Hitechmart";
import FranchiseTank from "./Components/FranchiseTank";
import Grand from "./Components/Grand";
import Heaven from "./Components/Heaven";
import Exports from "./Components/Exports";
import OurService from "./Components/CustomComponenet/ServiceComponents/OurService";
import OneLineDiv from "./Components/CustomComponenet/OneLine/OneLineDiv";
import ServiceUpperPart from "./Pages/ServiceUpperPart/ServiceUpperPart";
import WebDevelopment from "./Pages/WebDevelopment/WebDevelopment";
import AppDevelopment from "./Pages/AppDevelopment/AppDevelopment";
import Hr from "./Pages/Hr/Hr";
import PerformanceManagement from "./Pages/PerformanceManagement/PerformanceManagement";
import TrainingAndDevelopment from "./Pages/TrainingAndDevelopment/TrainingAndDevelopment";
import Development from "./Pages/OrganisationalDevelopment/Development";
import Branding from "./Pages/BrandingAndPositioning/Branding";
import Market from "./Pages/MarketResearchAndAnalysis/Market";
import Crm from "./Pages/CRM/Crm";
import SalesSupport from "./Pages/SalesSupport/SalesSupport";
import SearchEngine from "./Pages/SearchEngineOptimization/SearchEngine";
import Pay from "./Pages/PayPerClickAdvertising/Pay";
import Media from "./Pages/SocialMediaMarketing/Media";
import Email from "./Pages/E-mailMarketing/Email";
import CustomLowerPart from "./Components/CustomComponenet/CustomLowerPart";
import Navbar from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import NewFooter from "./Components/Footer/NewFooter";
import Faq from "./Components/FAQ/Faq";
import Contact from "./Components/ContactUs/Contact";
import Carrer from "./Components/Carrers/Carrer";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Components/AboutUs/About";
import CarrersForm from "./Components/CareersForm/CarrersForm";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />

          <Route path="/Hitechmart" element={<Hitechmart />} />
          <Route path="/FranchiseTank" element={<FranchiseTank />} />
          <Route path="/JobTanks" element={<Grand />} />
          <Route path="/GrandHeaven" element={<Heaven />} />
          <Route path="/CertonExports" element={<Exports />} />
          <Route path="/SoftwareDevelopment" element={<ServiceUpperPart />} />
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/AppDevelopment" element={<AppDevelopment />} />
          <Route path="/TalentAcquisitionandRecruitment" element={<Hr />} />
          <Route
            path="/PerformanceManagement"
            element={<PerformanceManagement />}
          />
          <Route
            path="/EmployeeTrainingandDevelopment"
            element={<TrainingAndDevelopment />}
          />
          <Route path="/OrganizationalDevelopment" element={<Development />} />
          <Route path="/BrandingandPositioning" element={<Branding />} />
          <Route path="/MarketResearch&Analysis" element={<Market />} />
          <Route path="/Crm" element={<Crm />} />
          <Route path="/SalesSupport" element={<SalesSupport />} />
          <Route path="/SearchEngineOptimization" element={<SearchEngine />} />
          <Route path="/PayPerClickAdvertising" element={<Pay />} />
          <Route path="/SocialMediaMarketing" element={<Media />} />
          <Route path="/E-mailMarketing" element={<Email />} />
          <Route path="/Faq" element={<Faq />} />
          {/* <Route path="/AboutUs" element={<About />} /> */}
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Careers" element={<Carrer />} />
          <Route path="/CarrersForm/:position" element={<CarrersForm />} />
        </Routes>
        <NewFooter />
      </Router>
    </div>
  );
};

export default App;
