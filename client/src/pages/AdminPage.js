import React, { useEffect } from "react";
import Navbar from "../components/navigation/Navbar";
import {
  AddAttendant,
  EditAttendant,
  AddParty,
  EditParty,
} from "../components/menus";
import { useSelector } from "react-redux";
import HeaderSection from "../components/sections/HeaderSection";
import Footer from "../components/navigation/Footer";

const AdminPage = () => {
  const [selectedFile, setSelectedFile] = React.useState([]);
  const [fileIsSelected, setFileIsSelected] = React.useState(false);
  const [attendants, setAttendants] = React.useState([
    {
      uuid: 1,
      name: "John Weasle",
      partyName: "Doe",
      invitationID: "1",
      isAttending: "1",
    },
    {
      uuid: 2,
      name: "Jane Crabs",
      partyName: "Crabs",
      invitationID: "2",
      isAttending: "0",
    }
  ]);
  const [selectedAttendant, setSelectedttendant] = React.useState(
    {
      uuid: -1,
      name: "",
      partyName: "",
      invitationID: "",
      isAttending: "",
    },
  );

  const API_URL = process.env.REACT_APP_API_URL;
  const token = useSelector((state) => state.token);

  const handleRefresh = () => {
    fetch(`${API_URL}/internal/${token}`, {
      method: "GET",
      mode: "cors",
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

  const fileUploadHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setFileIsSelected(true);
  };

  const handleUploadCSV = (e) => {
    e.preventDefault();
    if (!fileIsSelected) {
      alert("Please select a .csv file to upload");
      return;
    }
    console.log(JSON.parse(selectedFile));
    fetch(`${API_URL}/uploadcsv`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ selectedFile }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <>
      <Navbar />
      <HeaderSection title={"Admin"} />
      <div className="section">
        <div className="container">
          <div
            className="container-group"
            style={{ paddingLeft: "20px", paddingRight: "20px", justifyContent: "start" }}
          >
            <h2>Action Menu</h2>
            <button type="button" onClick={(e) => handleDownloadCSV(e)}>
              Download CSV
            </button>
            <div className="form-group">
              <input type="file" name="file" onChange={fileUploadHandler} />
              <button type="button" onClick={(e) => handleUploadCSV(e)}>
                Upload CSV
              </button>
            </div>
          </div>
          <div
            className="container-group"
            style={{ paddingLeft: "20px", paddingRight: "20px", justifyContent: "start" }}
          >
            <h2>Invited</h2>
            <div className="attendant">
              <div className="attendant-item">Full Name</div>
              <div className="attendant-item">Party Name</div>
              <div className="attendant-item">Invitation ID</div>
              <div className="attendant-item">Attending</div>
            </div>
            {attendants.map((attendant, i) => (
              <div
                className="attendant"
                key={i}
                onClick={() => setSelectedttendant(attendants[i])}
              >
                <div className="attendant-item">{attendant.name}</div>
                <div className="attendant-item">{attendant.partyName}</div>
                <div className="attendant-item">{attendant.invitationID}</div>
                <div className="attendant-item">
                  {attendant.isAttending === 1 ? "Yes" : "No"}
                </div>
              </div>
            ))}
          </div>
          <div
            className="container-group"
            style={{ paddingLeft: "20px", paddingRight: "20px", justifyContent: "start" }}
          >
            <div>
              <AddAttendant
                  token={token}
                  API_URL={API_URL}
                  handleRefresh={handleRefresh}
                />
              <EditAttendant
                  token={token}
                  selectedAttendant={selectedAttendant}
                  API_URL={API_URL}
                  handleRefresh={handleRefresh}
                />
              <AddParty
                  token={token}
                  API_URL={API_URL}
                  handleRefresh={handleRefresh}
                />
              <EditParty
                  token={token}
                  attendants={attendants}
                  API_URL={API_URL}
                  handleRefresh={handleRefresh}
                />
            </div>
          </div>
        </div>
      </div>
      <div className="section" />
      <Footer />
    </>
  );
};

export default AdminPage;
