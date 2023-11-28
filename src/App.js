import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import {Navbar} from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import NewFooter from "./Components/Footer/NewFooter";
import Faq from "./Components/FAQ/Faq";
import About from "./Components/AboutUs/About";
import Contact from "./Components/ContactUs/Contact";
import Carrer from "./Components/Carrers/Carrer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />

          <Route path="/Hitechmart" element={<Hitechmart />} />
          <Route path="/FranchiseTank" element={<FranchiseTank />} />
          <Route path="/Grand" element={<Grand />} />
          <Route path="/Heaven" element={<Heaven />} />
          <Route path="/Exports" element={<Exports />} />
          <Route path="/ServiceUpperPart" element={<ServiceUpperPart />} />
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/AppDevelopment" element={<AppDevelopment />} />
          <Route path="/Hr" element={<Hr />} />
          <Route
            path="/PerformanceManagement"
            element={<PerformanceManagement />}
          />
          <Route
            path="/TrainingAndDevelopment"
            element={<TrainingAndDevelopment />}
          />
          <Route path="/Development" element={<Development />} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/Crm" element={<Crm />} />
          <Route path="/SalesSupport" element={<SalesSupport />} />
          <Route path="/SearchEngine" element={<SearchEngine />} />
          <Route path="/Pay" element={<Pay />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/Email" element={<Email />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Carrer" element={<Carrer />} />
        </Routes>
        <NewFooter />
      </Router>
    </div>
  );
};

export default App;
