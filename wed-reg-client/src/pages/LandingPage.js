import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  const [message, setMessage] = useState("");
  // const host = "localhost";
  // const port = 8080;
  // useEffect(() => {
  //   getHomepageText();
  // }, []);
  // const getHomepageText = async () => {
  //   fetch(`http://${host}:${port}`, {
  //     method: "GET",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { message } = data;
  //       console.log(message);
  //       setMessage(message);
  //     });
  // };
  return (
    <div>
      <Navbar />
      <div className="hero-container">
        <h1 className="hero-text">We're Getting Married!</h1>
        <Link to="/register">
          <button className="button-primary">Let Us Know You're Coming!</button>
        </Link>
      </div>
      <div className="info-container">
        <ul className="info-list">
          <li className="info-list-item">
            <h2 className="info-text">Located In</h2>
            <text>
              This is some filler text for our website! hope you like it!
            </text>
          </li>
          <li className="info-list-item">
            <div className="divider"></div>
          </li>
          <li className="info-list-item">
            <h2 className="info-text">Contact Us</h2>
            <text>
              This is some filler text for our website! hope you like it!
            </text>
          </li>
          <li className="info-list-item">
            <div className="divider"></div>
          </li>
          <li className="info-list-item">
            <h2 className="info-text">Find Us On</h2>
            <text>
              This is some filler text for our website! hope you like it!
            </text>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
