import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  const [message, setMessage] = useState("");
  const host = "localhost";
  const port = 8080;
  useEffect(() => {
    getHomepageText();
  }, []);
  const getHomepageText = async () => {
    fetch(`http://${host}:${port}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { message } = data;
        console.log(message);
        setMessage(message);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 color={"white"} margin="2rem">
          {message}
        </h1>
        <Link to="/register">
          <button>Let Us Know You're Coming!</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
