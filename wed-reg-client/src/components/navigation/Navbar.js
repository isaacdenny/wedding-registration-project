import React from "react";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = (params) => {
  return (
    <nav className={ params.transparent ? "transparent-nav" : "nav"}>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/our-story">
            Our Story
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about-bridal">
            About Bridal
          </Link>
        </li>
      </ul>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="nav-logo">
          Allie <HiHeart /> Isaac
        </h1>
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
