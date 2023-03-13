import React from "react";

const InfoSection = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="info-container">
          <ul className="info-list">
            <li className="info-list-item">
              <h2 className="info-text">Located In</h2>
              This is some filler text for our website! hope you like it!
            </li>
            <li className="info-list-item">
              <div className="divider"></div>
            </li>
            <li className="info-list-item">
              <h2 className="info-text">Contact Us</h2>
              This is some filler text for our website! hope you like it!
            </li>
            <li className="info-list-item">
              <div className="divider"></div>
            </li>
            <li className="info-list-item">
              <h2 className="info-text">Find Us On</h2>
              This is some filler text for our website! hope you like it!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
