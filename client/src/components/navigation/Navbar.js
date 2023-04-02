import React from "react";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowDimensions from "../../app/useWindoDimensions";

const Navbar = (params) => {
  const [isMenu, setIsMenu] = useState(false);
  const { height, width } = useWindowDimensions();

  const handleSetMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="nav">
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
      <div onClick={handleSetMenu}>
        <GiHamburgerMenu color="white" size={"20px"} />
      </div>
      <div
        className={isMenu && width <= 600 ? "side-menu" : "side-menu-closed"}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="nav-logo">
          Allie <HiHeart /> Isaac
        </h1>
      </Link>
        <Link className="nav-link" to="/our-story">
          Our Story
        </Link>
        <Link className="nav-link" to="/about-bridal">
          About Bridal
        </Link>
        <Link className="nav-link" to="/hotel-rec">
          Hotel Rec
        </Link>
        <Link className="nav-link" to="/event-details">
          Event Details
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
