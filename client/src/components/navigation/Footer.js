import React from "react";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="nav-logo">
          Allie <HiHeart /> Isaac
        </h1>
      </Link>
      <div className="nav-links">
        <li className="email">
          Please Feel Free to Email us at: AllieAndIsaacWedding@gmail.com
        </li>
      </div>
    </div>
  );
};

export default Footer;
