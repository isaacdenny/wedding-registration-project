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
        partyName: selectedPartyName,
        invitationID: selectedPartyID,
        isAttending: e.target[`isAttending${i}`].checked,
      });
    }
    fetch(`${params.API_URL}/internal/${params.token}/party`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        party: partyList
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        params.handleRefresh();
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`${params.API_URL}/internal/${params.token}/party`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invitationID: selectedPartyID
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        params.handleRefresh();
      });
  };

  useEffect(() => {
    let partyList = [];
    params.attendants.map((attendant) =>
      attendant.invitationID === selectedPartyID
        ? partyList.push(attendant)
        : null
    );
    setParty(partyList);
    setSelectedPartyName(partyList.length > 0 ? partyList[0].partyName : "")
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
