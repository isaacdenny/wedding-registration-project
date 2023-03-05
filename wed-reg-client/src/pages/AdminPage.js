import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AdminPage = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-container">
        <form>
          <div className="search-group">
            <label>Search Attendants</label>
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </div>
          <div className="action-group">
            <label>Attendant Actions</label>
            <button>Add Attendant</button>
            <button>Edit Attendant</button>
            <button>Delete Attendant</button>
          </div>
          <div className="action-group">
            <label>Attendant Actions</label>
            <button>Add Party</button>
            <button>Edit Party</button>
            <button>Delete Party</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
