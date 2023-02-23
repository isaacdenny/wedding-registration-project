import React from 'react'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <img src="logo.png" alt="logo" />
      </div>
      <ul className="Navbar-links">
        <li>
          <a href="/" className="Navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about-bridal" className="Navbar-link">
            About Bridal
          </a>
        </li>
        <li>
          <a href="/hotel-rec" className="Navbar-link">
            Hotel Recomendations
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar