import heroImage from "../../images/prom-5.jpg";
import { useState } from "react";

const FormSection = (params) => {
  const [partyName, setPartyName] = useState("");
  const [invitationID, setInvitationID] = useState("");
  const [attendants, setAttendants] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAttending, setIsAttending] = useState([]);
  let isAttendingArray = [];
  let attendantsArray = [];

  const API_URL = process.env.REACT_APP_API_URL;

  const handleRegister = (event) => {
    event.preventDefault();
    if (!partyName || !invitationID) {
      alert("Please fill out all fields");
      return;
    }
    fetch(`${API_URL}/register/${partyName}-${invitationID}`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => {
        if (res.status !== 200) {
          throw res.status;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setAttendants(data);
      })
      .then(() => {
        attendants.map((att) => {
          setIsAttending(...isAttending, att.isAttending != 0 ? true : false);
        });
      })
      .then(() => setIsRegistered(!isRegistered))
      .catch((err) => {
        setAttendants([]);
        if (err === 401) {
          alert("party name or invitation ID not found");
          return;
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    attendants.map((attendant, i) => {
      return attendantsArray.push({
        name: attendant.name,
        partyName: attendant.partyName,
        isAttending: isAttendingArray[i],
        invitationID: attendant.invitationID,
      });
    });
    fetch(`${API_URL}/register/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ attendants: attendantsArray }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Thank you for letting us know who in your party is attending! We cannot wait to see you!")
        setIsRegistered(!isRegistered);
        setIsAttending([]);
        isAttendingArray = [];
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
            <h2>RSVP Now!</h2>
            Please select who in your party will be attending!
            <form onSubmit={handleSubmit}>
              <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                {attendants ? (
                  attendants.map((attendant, i) => {
                    isAttendingArray[i] = isAttending[i] || false;
                    return (
                      <div
                        key={i}
                        className="form-group"
                        style={{ justifyContent: "left" }}
                      >
                        <label>{attendant.name}</label>
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
              </div>
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
