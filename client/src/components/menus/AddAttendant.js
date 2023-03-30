import React from 'react'

const AddAttendant = (params) => {
  const [name, setName] = React.useState("");
  const [partyName, setPartyName] = React.useState("");
  const [invitationID, setInvitationID] = React.useState("");
  const [isAttending, setIsAttending] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${params.API_URL}/internal/${params.token}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        partyName: partyName,
        invitationID: invitationID,
        isAttending: isAttending,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        params.handleRefresh();
      });
  };

  return (
    <div>
      <h2>Add Attendant</h2>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Party Name</label>
        <input
          type="text"
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Invite ID</label>
        <input
          type="text"
          value={invitationID}
          onChange={(e) => setInvitationID(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Is Attending</label>
        <input
          type="checkbox"
          checked={isAttending}
          onChange={(e) => setIsAttending(e.target.checked)}
        />
      </div>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddAttendant