import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AddAttendant, EditAttendant, AddParty, EditParty } from "../components/menus"

const AdminPage = () => {
  const [isAttending, setIsAttending] = React.useState(false);
  const [notAttending, setNotAttending] = React.useState(false);
  const [menu, setMenu] = React.useState('addAttendant');

  const menus = [
    "addAttendant",
    "editAttendant",
    "addParty",
    "editParty",
  ]

  const handleMenu = (type) => {
    setMenu((menus[type]));
  }

  useEffect(() => { 
    // fetch all users with filters
  }, [isAttending, notAttending])

  return (
    <div>
      <Navbar />
      <div className="admin-container">
        <form>
          <div className="search-group">
            <label>Search Attendants</label>
            <input type="text" placeholder="Joe Shmoe" />
            <button type="submit">Search</button>
          </div>
          <label>Filters</label>
          <div className="filter-group">
            <label>Attending</label>
            <input type="checkbox" />
            <label>Not Attending</label>
            <input type="checkbox" />
          </div>
        </form>
        <div className="action-group">
          <label>Attendant Actions</label>
          <button onClick={handleClick("addAttendant")}>Add Attendant</button>
          <button onClick={handleMenu("editAttendant")}>Edit Attendant</button>
        </div>
        <div className="action-group">
          <label>Attendant Actions</label>
          <button onClick={handleMenu("addParty")}>Add Party</button>
          <button onClick={handleMenu("editParty")}>Edit Party</button>
        </div>
        <div className="menu-container">
          {menu === "addAttendant" ? (<AddAttendant></AddAttendant>) : (<></>)}
          {menu === "editAttendant" ? (<EditAttendant></EditAttendant>) : (<></>)}
          {menu === "addParty" ? (<AddParty></AddParty>) : (<></>)}
          {menu === "editParty"? (<EditParty></EditParty>) : (<></>)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
