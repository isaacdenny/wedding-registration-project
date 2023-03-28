import React, { useEffect } from "react";

const EditAttendant = (params) => {
  const [id, setID] = React.useState(params.selectedAttendant.id);
  const [name, setName] = React.useState(
    params.selectedAttendant.firstName
  );
  const [partyName, setPartyName] = React.useState(
    params.selectedAttendant.lastName
  );
  const [invitationID, setInvitationID] = React.useState(
    params.selectedAttendant.invitationID
  );
  const [isAttending, setIsAttending] = React.useState(
    params.selectedAttendant.isAttending
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${params.API_URL}/admin/updateAttendant`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params.token,
        id: id,
        name: name,
        partyName: partyName,
        invitationID: invitationID,
        isAttending: isAttending,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        params.handleRefresh();
      });
  };

  const handleDelete = (e) => {
    console.log(id, name, partyName, invitationID, isAttending);
    e.preventDefault();
    fetch(`${params.API_URL}/admin/deleteAttendant`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params.token,
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        params.handleRefresh();
      });
  };

  useEffect(() => {
    setID(params.selectedAttendant.id);
    setName(params.selectedAttendant.firstName);
    setPartyName(params.selectedAttendant.lastName);
    setInvitationID(params.selectedAttendant.invitationID);
    setIsAttending(params.selectedAttendant.isAttending);
  }, [params.selectedAttendant]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Edit Attendant</h2>
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
          checked={isAttending === 1 || isAttending === true}
          onChange={(e) => setIsAttending(e.target.checked)}
        />
      </div>
      <div className="form-button-group">
        <button onClick={handleSubmit}>Save</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default EditAttendant;
