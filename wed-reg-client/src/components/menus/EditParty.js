import React, { useEffect } from "react";

const EditParty = (params) => {
  // party states using array or object
  const [selectedPartyID, setSelectedPartyID] = React.useState(
    params.attendants[0].invitationID
  );

  const [party, setParty] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${params.API_URL}/admin/updateParty`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params.token,
        // invitationID: selectedPartyID,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        params.handleRefresh();
      });
  };

  const handleDelete = (e) => {
    console.log(party);
    e.preventDefault();
    fetch(`${params.API_URL}/admin/deleteParty`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params.token,
        invitationID: selectedPartyID,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        params.handleRefresh();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Party</h1>
      <label>Invitation ID</label>
      <input
        type={"text"}
        value={selectedPartyID}
        onChange={(e) => setSelectedPartyID(e.target.value)}
      />
      <div className="attendant">
        <div className="attendant-item">Name</div>
        <div className="attendant-item">Invitation ID</div>
        <div className="attendant-item">Attending</div>
      </div>
      {params.attendants.map((attendant, i) =>
        attendant.invitationID === selectedPartyID ? (
          <div className="attendant" key={i}>
            <div className="attendant-item">
              <input type="text" value={attendant.firstName} />
              <input type="text" value={attendant.lastName} />
            </div>
            <div className="attendant-item">
              <input type="text" value={attendant.invitationID} />
            </div>
            <div className="attendant-item">
              <input
                type="checkbox"
                checked={
                  attendant.isAttending === 1 || attendant.isAttending === true
                }
              />
            </div>
          </div>
        ) : (
          <></>
        )
      )}
      <div className="form-button-group">
        <button type="submit">Save</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </form>
  );
};

export default EditParty;
