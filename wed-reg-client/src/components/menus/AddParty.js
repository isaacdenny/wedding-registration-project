import React from "react";

const AddParty = (params) => {
  const [selectedPartyID, setSelectedPartyID] = React.useState(101);
  const [party, setParty] = React.useState([]);
  let partyList = [];

  const handleAddMember = (e) => { 
    setParty([...party, { firstName: "", lastName: "", isAttending: false }]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    partyList = [];
    for (let i = 0; i < party.length; i++) {
      partyList.push({
        id: party[i].id,
        firstName: e.target[`firstName${i}`].value,
        lastName: e.target[`lastName${i}`].value,
        invitationID: selectedPartyID,
        isAttending: e.target[`isAttending${i}`].checked,
      });
    }
    fetch(`${params.API_URL}/admin/addParty`, {
      method: "POST",
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
        setParty([])
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Party</h1>
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
        <div className="attendant-item">Name</div>
        <div className="attendant-item">Attending</div>
      </div>
      {party.map((member, i) => (
        <div className="attendant" key={i}>
          <div className="attendant-item">
            <input
              type="text"
              defaultValue={member.firstName}
              name={"firstName" + i}
            />
            <input
              type="text"
              defaultValue={member.lastName}
              name={"lastName" + i}
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
        <button type="button" onClick={handleAddMember}>Add Member</button>
      </div>
    </form>
  );
};

export default AddParty;
