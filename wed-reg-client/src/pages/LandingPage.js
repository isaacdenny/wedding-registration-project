import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import FormSection from "../components/FormSection";

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
