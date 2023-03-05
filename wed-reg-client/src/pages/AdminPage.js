import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AddAttendant, EditAttendant, AddParty, EditParty } from "../components/menus"
import { useSelector } from "react-redux"

const AdminPage = () => {
  const [isAttending, setIsAttending] = React.useState(false);
  const [notAttending, setNotAttending] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [menu, setMenu] = React.useState('addAttendant');
  
  const API_URL = process.env.REACT_APP_API_URL;
  
  const token = useSelector((state) => state.token);

  const menus = [
    "addAttendant",
    "editAttendant",
    "addParty",
    "editParty",
  ]

  const handleMenu = (type) => {
    setMenu((type));
  }

  useEffect(() => { 
    fetch(`${API_URL}/admin/getAll`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token ? token : null, filter: filter ? filter : null }),
    }).then((res) => res.json()).then((data) => { 
      console.log(data);
    })
  }, [setIsAttending, setNotAttending, filter, API_URL, token]);

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <form>
          <div className="search-group">
            <label>Search Attendants</label>
            <input
              type="text"
              placeholder="Joe Shmoe"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>
          <label>Filters</label>
          <div className="filter-group">
            <label>Attending</label>
            <input
              type="checkbox"
              value={isAttending}
              onChange={(e) => setIsAttending(e.target.value)}
            />
            <label>Not Attending</label>
            <input
              type="checkbox"
              value={notAttending}
              onChange={(e) =>setNotAttending(e.target.value)}
            />
          </div>
        </form>
        <div className="action-group">
          <label>Attendant Actions</label>
          <button onClick={() => handleMenu("addAttendant")}>Add Attendant</button>
          <button onClick={() => handleMenu("editAttendant")}>Edit Attendant</button>
        </div>
        <div className="action-group">
          <label>Attendant Actions</label>
          <button onClick={() => handleMenu("addParty")}>Add Party</button>
          <button onClick={() => handleMenu("editParty")}>Edit Party</button>
        </div>
        <div className="menu-container">
          {menu === "addAttendant" ? <AddAttendant token={token} /> : <></>}
          {menu === "editAttendant" ? <EditAttendant token={token} /> : <></>}
          {menu === "addParty" ? <AddParty token={token} /> : <></>}
          {menu === "editParty" ? <EditParty token={token} /> : <></>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
