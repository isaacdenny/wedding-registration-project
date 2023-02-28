import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="hero-container">
        <h1 className="hero-text">We're Getting Married!</h1>
        <Link to="/register">
          <button className="button-primary">Let Us Know You're Coming!</button>
        </Link>
      </div>
      <InfoSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
