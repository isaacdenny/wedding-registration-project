import React, { useEffect } from "react";
import heroImage from "../images/formsection.jpg";
import { useState } from "react";

const FormSection = () => {
  const [lastName, setLastName] = useState("");
  const [invitationID, setInvitationID] = useState("");
  const [attendants, setAttendants] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAttending, setIsAttending] = useState(false);
  const isAttendingArray = [];
  const attendantsArray = [];

  const host = "localhost";
  const port = 8080;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(lastName, invitationID);
    fetch(`http://${host}:${port}/attendant/getAttendants`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lastName: lastName, invitationID: invitationID }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAttendants(data);
      })
      .then(() => {
        setIsRegistered(!isRegistered);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    attendants.map((attendant, i) => {
      attendantsArray[i] = {
        firstName: attendant.firstName,
        lastName: attendant.lastName,
        isAttending: isAttending[i],
        invitationID: attendant.invitationID,
      };
    });
    fetch(`http://${host}:${port}/attendant/register`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendantsArray),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        setIsRegistered(!isRegistered);
      });
  };

  useEffect(
    () => console.log(isAttendingArray + " is " + isAttending),
    [isAttending]
  );

  useEffect(() => {
    console.log(attendants);
  });

  return !isRegistered ? (
    <div className="form-section-container">
      <div className="form-image-container">
        <img
          src={heroImage}
          alt="Allie and Isaac's Wedding"
          className="form-image"
        />
      </div>
      <div className="form-container">
        <h1 className="form-title">Let Us Know You're Coming</h1>
        Register below with your last name and invitation ID!
        <form onSubmit={handleSubmit}>
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
  ) : (
    <div className="form-section-container">
      <div className="form-image-container">
        <img
          src={heroImage}
          alt="Allie and Isaac's Wedding"
          className="form-image"
        />
      </div>
      <div className="form-container">
        <h1 className="form-title">RSVP Now!</h1>
        Please select who in your party will be attending!
        <form onSubmit={handleRegister}>
          {attendants.map((attendant, i) => {
            isAttendingArray[i] = isAttending[i] || false;
            return (
              <div key={i} className="form-container-checkbox">
                <label className="form-label">
                  {attendant.firstName} {attendant.lastName}
                </label>
                <input
                  type="checkbox"
                  name={attendant.firstName}
                  checked={isAttending[i] || false}
                  onChange={(e) => {
                    isAttendingArray[i] = e.target.checked;
                    setIsAttending(isAttendingArray);
                  }}
                />
              </div>
            );
          })}
          <button type="submit" className="form-button">
            RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
