import React, { useEffect } from "react";

const EditParty = (params) => {
  const [selectedPartyID, setSelectedPartyID] = React.useState(
    params.attendants[0].invitationID
  );

  const [selectedPartyName, setSelectedPartyName] = React.useState(
    params.attendants[0].partyName
  );

  const [party, setParty] = React.useState([]);
  let partyList = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    partyList = [];
    for (let i = 0; i < party.length; i++) {
      partyList.push({
        uuid: party[i].uuid,
        name: e.target[`name${i}`].value,
        partyName: e.target[`partyName${i}`].value,
        invitationID: selectedPartyID,
        isAttending: e.target[`isAttending${i}`].checked,
      });
    }
    fetch(`${params.API_URL}/admin/updateParty`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params.token,
        party: partyList,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        params.handleRefresh();
      });
  };

  const handleDelete = (e) => {
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
        params.handleRefresh();
      });
  };

  useEffect(() => {
    partyList = [];
    params.attendants.map((attendant) =>
      attendant.invitationID === selectedPartyID
        ? partyList.push(attendant)
        : null
    );
    setParty(partyList);
  }, [selectedPartyID, params.attendants]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Party</h2>
      <label>Party Name</label>
      <input
        type={"text"}
        value={selectedPartyName}
        onChange={(e) => setSelectedPartyName(e.target.value)}
      />
      <label>Invitation ID</label>
      <input
        type={"number"}
        value={selectedPartyID.toString()}
        onChange={(e) =>
          setSelectedPartyID(
            e.target.value != null
              ? parseInt(e.target.value)
              : setSelectedPartyID(0)
          )
        }
      />
      <div className="attendant">
        <div className="attendant-item">Full Name</div>
        <div className="attendant-item">Party Name</div>
        <div className="attendant-item">Attending</div>
      </div>
      {party.map((member, i) => (
        <div className="attendant" key={i}>
          <div className="attendant-item">
            <input
              type="text"
              defaultValue={member.name}
              name={"name" + i}
            />
            <input
              type="text"
              defaultValue={member.partyName}
              name={"partyName" + i}
            />
          </div>
          <div className="attendant-item">
            <input
              type="checkbox"
              defaultChecked={
                member.isAttending === 1 || member.isAttending === true
              }
              name={"isAttending" + i}
            />
          </div>
        </div>
      ))}
      <div className="form-button-group">
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </form>
  );
};

export default EditParty;
