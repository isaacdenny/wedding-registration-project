import heroImage from "../../images/formsection.jpg";
import { useState } from "react";

const FormSection = (params) => {
  const [partyName, setPartyName] = useState("");
  const [invitationID, setInvitationID] = useState("");
  const [attendants, setAttendants] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAttending, setIsAttending] = useState(false);
  const isAttendingArray = [];
  const attendantsArray = [];

  const API_URL = process.env.REACT_APP_API_URL;

  const handleRegister = (event) => {
    event.preventDefault();
    if (!partyName || !invitationID) {
      alert("Please fill out all fields");
      return;
    }
    fetch(`${API_URL}/register/getAttendants`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        partyName: partyName,
        invitationID: invitationID,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length <= 0) {
          alert("Last name or invitation ID not found");
          return;
        }
        setAttendants(data);
        setIsRegistered(!isRegistered);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    attendants.map((attendant, i) => {
      return attendantsArray.push({
        name: attendant.name,
        partyName: attendant.partyName,
        isAttending: isAttending[i],
        invitationID: attendant.invitationID,
      });
    });
    fetch(`${API_URL}/register/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendantsArray),
    })
      .then((res) => res.json())
      .then(() => {
        setIsRegistered(!isRegistered);
      });
  };

  return !isRegistered ? (
    <>
      <div
        className="section"
        style={
          params.isAlone ? { paddingBottom: "80px", paddingTop: "80px" } : {}
        }
      >
        <div
          className="container"
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
        >
          <div className="container-group" style={{ alignItems: "center" }}>
            <img
              src={heroImage}
              alt="Allie and Isaac's Wedding"
              className="arch-image"
            />
          </div>
          <div className="container-group">
            <h2>Let Us Know You're Coming</h2>
            <p>Sign in with your party name and invitation ID!</p>
            <form className="pretty-form" onSubmit={handleRegister}>
              <input
                type="text"
                name="partyName"
                value={partyName}
                onChange={(e) => setPartyName(e.target.value)}
                placeholder="Party Name"
              />
              <input
                type="text"
                name="invitationID"
                value={invitationID}
                onChange={(e) => setInvitationID(e.target.value)}
                placeholder="Invitation ID"
              />
              <button type="submit" className="button-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      {params.isEnd ? <div className="section" /> : null}
    </>
  ) : (
    <>
      <div
        className="section"
        style={
          params.isAlone ? { paddingBottom: "80px", paddingTop: "80px" } : {}
        }
      >
        <div className="container">
          <div className="container-group" style={{ alignItems: "center" }}>
            <img
              src={heroImage}
              alt="Allie and Isaac's Wedding"
              className="arch-image"
            />
          </div>
          <div className="container-group">
            <h1 className="title">RSVP Now!</h1>
            Please select who in your party will be attending!
            <form onSubmit={handleSubmit}>
              {attendants != null ? (
                attendants.map((attendant, i) => {
                  isAttendingArray[i] = isAttending[i] || false;
                  return (
                    <div key={i} className="form-container-checkbox">
                      <label className="form-label">{attendant.name}</label>
                      <input
                        type="checkbox"
                        name={attendant.name}
                        checked={isAttending[i] || false}
                        onChange={(e) => {
                          isAttendingArray[i] = e.target.checked;
                          setIsAttending(isAttendingArray);
                        }}
                      />
                    </div>
                  );
                })
              ) : (
                <>Error loading party...</>
              )}
              <button type="submit" className="button-primary">
                RSVP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSection;
