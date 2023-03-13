import React from "react";
import Navbar from "../components/navigation/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import InfoSection from "../components/sections/InfoSection";
import FormSection from "../components/sections/FormSection";

function LandingPage() {
  return (
    <div>
      <Navbar transparent={true} />
      <div className="hero-container">
        <h1 className="hero-text">We're Getting Married!</h1>
        <Link to="/event-details">
          <button className="button-primary">
            Learn More!
          </button>
        </Link>
      </div>
      <InfoSection />
      <FormSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
