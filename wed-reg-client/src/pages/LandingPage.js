import React from 'react'
import { useEffect, useState } from "react";
import Navbar from '../components/Navbar'

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
    <>
      <Navbar />
      <div className="App">
        <div className="App-header">{message}</div>
        <a href="/register">
          <button className="App-button-primary">
            Let Us Know You're Coming!
          </button>
        </a>
      </div>
    </>
  );
}

export default LandingPage