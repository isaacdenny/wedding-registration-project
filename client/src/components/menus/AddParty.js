import React from "react";

const AddParty = (params) => {
  const [partyID, setPartyID] = React.useState(1);
  const [partyName, setPartyName] = React.useState("");
  const [party, setParty] = React.useState([{ name: "", isAttending: false }]);
  let partyList = [];

  const handleAddMember = (e) => {
    setParty([...party, { name: "", isAttending: false }]);
  };

  const handleRemoveMember = (e) => { 
    let partyList = party;
    partyList.pop();
    setParty(partyList)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    partyList = [];
    for (let i = 0; i < party.length; i++) {
      partyList.push({
        uuid: party[i].uuid,
        name: e.target[`name${i}`].value,
        partyName: partyName,
        invitationID: partyID,
        isAttending: e.target[`isAttending${i}`].checked,
      });
    }
    fetch(`${params.API_URL}/internal/${params.token}/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        party: partyList,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        params.handleRefresh();
        setParty([]);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Party</h2>
      <div className="form-group">
        <label>Party Name</label>
        <input
          type={"text"}
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Invitation ID</label>
        <input
          type={"number"}
          value={partyID.toString()}
          onChange={(e) =>
            setPartyID(
              e.target.value != null
                ? parseInt(e.target.value)
                : setPartyID(0)
            )
          }
        />
      </div>
      <div className="attendant">
        <div>Name</div>
        <div>Attending</div>
      </div>
      {party.map((member, i) => (
        <div className="attendant" key={i}>
          <input
            type="text"
            defaultValue={member.name}
            name={"name" + i}
          />
          <input
            type="checkbox"
            defaultChecked={
              member.isAttending === 1 || member.isAttending === true
            }
            name={"isAttending" + i}
          />
        </div>
      ))}
      <button type="submit">Save</button>
      <button type="button" onClick={handleRemoveMember}>remove</button>
      <button type="button" onClick={handleAddMember}>
        Add Member
      </button>
    </form>
  );
};

export default AddParty;
