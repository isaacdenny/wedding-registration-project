import React from "react";
import Navbar from "../components/navigation/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import InfoSection from "../components/sections/InfoSection";
import FormSection from "../components/sections/FormSection";
import HeaderSection from "../components/sections/HeaderSection";

function LandingPage() {
  return (
    <div>
      <Navbar transparent={true} />
      <HeaderSection title={"Together Forever"} />
      <FormSection />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
