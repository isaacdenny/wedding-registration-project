import React from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about-bridal">
            About Bridal
          </Link>
        </li>
      </ul>
      <Link to="/">
        <BsFillBookmarkHeartFill className="nav-logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/hotel-rec">
            Hotel Rec
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/event-details">
            Event Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
