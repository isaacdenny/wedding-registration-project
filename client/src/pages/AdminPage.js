import React, { useEffect } from "react";
import Navbar from "../components/navigation/Navbar";
import {
  AddAttendant,
  EditAttendant,
  AddParty,
  EditParty,
} from "../components/menus";
import { useSelector } from "react-redux";

const AdminPage = () => {
  const [filterAttending, setFilterAttending] = React.useState(false);
  const [notAttending, setNotAttending] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [menu, setMenu] = React.useState("editAttendant");
  const [csvFile, setCsvFile] = React.useState([]);
  const [attendants, setAttendants] = React.useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      invitationID: "1",
      isAttending: "1",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Crabs",
      invitationID: "2",
      isAttending: "0",
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Doe",
      invitationID: "1",
      isAttending: "0",
    },
    {
      id: 4,
      firstName: "Chris",
      lastName: "Doe",
      invitationID: "1",
      isAttending: "0",
    },
  ]);
  const [selectedAttendant, setSelectedttendant] = React.useState(
    attendants[0]
  );

  const API_URL = process.env.REACT_APP_API_URL;
  const token = useSelector((state) => state.token);

  const handleMenu = (type) => {
    setMenu(type);
  };

  const handleRefresh = () => {
    console.log("Refreshing attendants...");
    fetch(`${API_URL}/admin/getAll`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        filter: filter,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAttendants(data);
      });
  };

  const handleDownloadCSV = (e) => {
    e.preventDefault();
    console.log("Requesting CSV...");
    fetch(`${API_URL}/downloadcsv`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        const blob = new Blob([data], { type: "text/csv" });
        const href = URL.createObjectURL(blob);

        const a = Object.assign(document.createElement("a"), {
          href,
          style: "display: none;",
          download: "attendants.csv",
        });
        document.body.appendChild(a);

        a.click();
        URL.revokeObjectURL(href);
        a.remove();
      });
  };

  const handleUploadCSV = (e) => {
    e.preventDefault();
    console.log("Uploading CSV...");
    console.log(JSON.parse(csvFile));
    // fetch(`${API_URL}/uploadcsv`, {
    //   method: "PUT",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: JSON.stringify({csvFile})
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <div className="ui-container">
          <h1>Action Menu</h1>
          <div className="ui-group">
            <label>Search Attendants</label>
            <div className="group">
              <input
                type="text"
                placeholder="Joe Shmoe"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <button type="submit">Search</button>
            </div>
          </div>
          <div className="ui-group">
            <label>Filters</label>
            <div className="group">
              <label>Attending</label>
              <input
                type="checkbox"
                value={filterAttending}
                onChange={(e) => setFilterAttending(e.target.value)}
              />
              <label>Not Attending</label>
              <input
                type="checkbox"
                value={notAttending}
                onChange={(e) => setNotAttending(e.target.value)}
              />
              <button type="button" onClick={(e) => handleDownloadCSV(e)}>
                Download CSV
              </button>
              <form
                action="fileupload"
                method="post"
                enctype="multipart/form-data"
              >
                <input type="file" onChange={(e) => setCsvFile(e)} />
                <button type="button" onClick={(e) => handleUploadCSV(e)}>
                  Upload CSV
                </button>
              </form>
            </div>
          </div>
          <div className="ui-group">
            <label>Attendant Actions</label>
            <div className="group">
              <button onClick={() => handleMenu("addAttendant")}>
                Add Attendant
              </button>
              <button onClick={() => handleMenu("editAttendant")}>
                Edit Attendant
              </button>
            </div>
          </div>
          <div className="ui-group">
            <label>Party Actions</label>
            <div className="group">
              <button onClick={() => handleMenu("addParty")}>Add Party</button>
              <button onClick={() => handleMenu("editParty")}>
                Edit Party
              </button>
            </div>
          </div>
        </div>
        <div className="ui-container">
          <h1>Invited</h1>
          <div className="attendant">
            <div className="attendant-item">Name</div>
            <div className="attendant-item">Invitation ID</div>
            <div className="attendant-item">Attending</div>
          </div>
          {attendants.map((attendant, i) => (
            <div
              className="attendant"
              key={i}
              onClick={() => setSelectedttendant(attendants[i])}
            >
              <div className="attendant-item">
                {attendant.firstName} {attendant.lastName}
              </div>
              <div className="attendant-item">{attendant.invitationID}</div>
              <div className="attendant-item">
                {attendant.isAttending === 1 ? "Yes" : "No"}
              </div>
            </div>
          ))}
        </div>
        <div className="ui-container">
          <div>
            {menu === "addAttendant" ? (
              <AddAttendant
                token={token}
                API_URL={API_URL}
                handleRefresh={handleRefresh}
              />
            ) : (
              <></>
            )}
            {menu === "editAttendant" ? (
              <EditAttendant
                token={token}
                selectedAttendant={selectedAttendant}
                API_URL={API_URL}
                handleRefresh={handleRefresh}
              />
            ) : (
              <></>
            )}
            {menu === "addParty" ? (
              <AddParty
                token={token}
                API_URL={API_URL}
                handleRefresh={handleRefresh}
              />
            ) : (
              <></>
            )}
            {menu === "editParty" ? (
              <EditParty
                token={token}
                attendants={attendants}
                API_URL={API_URL}
                handleRefresh={handleRefresh}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
