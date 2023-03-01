import React from "react";
import heroImage from "../images/formsection.jpg";
import { useEffect, useState } from "react";

const FormSection = () => {
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [invitationID, setInvitationID] = useState("");
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
    <div className="form-section-container">
      <div className="form-image-container">
        <img src={heroImage} className="form-image" />
      </div>
      <div className="form-container">
        <h1 className="form-title">Let Us Know You're Coming</h1>
        Register below with your last name and invitation ID!
        <form>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="invitationID"
            value={invitationID}
            onChange={(e) => setInvitationID(e.target.value)}
            placeholder="Invitation ID"
          />
          <button type="submit" className="form-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
