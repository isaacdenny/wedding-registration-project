import React from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <BsFillBookmarkHeartFill size={"30px"} />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-bridal">About Bridal</Link>
        </li>
        <li>
          <Link to="/hotel-rec">Hotel Recomendations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
