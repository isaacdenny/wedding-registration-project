import React, { useEffect } from "react";

const EditAttendant = (params) => {
  const [id, setID] = React.useState(
    params.selectedAttendant.id
  );
  const [firstName, setFirstName] = React.useState(
    params.selectedAttendant.firstName
  );
  const [lastName, setLastName] = React.useState(
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
        firstName: firstName,
        lastName: lastName,
        invitationID: invitationID,
        isAttending: isAttending,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        params.handleRefresh();
      });
  }

  const handleDelete = (e) => { 
    console.log(id, firstName, lastName, invitationID, isAttending);
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
  }

  useEffect(() => {
    setID(params.selectedAttendant.id);
    setFirstName(params.selectedAttendant.firstName);
    setLastName(params.selectedAttendant.lastName);
    setInvitationID(params.selectedAttendant.invitationID);
    setIsAttending(params.selectedAttendant.isAttending);
  }, [params.selectedAttendant]);


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
        <button type="submit">Save</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </form>
  );
};

export default EditAttendant;
