import React from 'react'

const AddAttendant = (params) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [invitationID, setInvitationID] = React.useState("");
  const [isAttending, setIsAttending] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${params.API_URL}/admin/addAttendant`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params.token,
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Attendant</h1>
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
          checked={isAttending}
          onChange={(e) => setIsAttending(e.target.checked)}
        />
      </div>
      <div className="form-button-group">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddAttendant