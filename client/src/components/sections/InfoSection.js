import React from "react";
import rings from "../../images/rings.jpg";

const InfoSection = (params) => {
  return (
    <>
      <div
        className="section"
        style={
          params.isAlone ? { paddingBottom: "80px", paddingTop: "80px" } : {}
        }
      >
        <div
          className="container"
          style={{
            flexDirection: "column",
            paddingTop: "20px",
            paddingBottom: "60px",
          }}
        >
          <img className="info-image" src={rings} alt="rings by flowers" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: "50px",
              paddingLeft: "50px",
            }}
          >
            <div
              className="container-group"
              style={{
                textAlign: "center",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingBottom: "24px",
                paddingTop: "24px",
                justifyContent: "left",
              }}
            >
              <h3 className="info-text">Located In</h3>
              <p>
                This is some filler text for our website! This is some filler
                text for our website!
              </p>
            </div>
            <div className="divider" />
            <div
              className="container-group"
              style={{
                textAlign: "center",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingBottom: "24px",
                paddingTop: "24px",
                justifyContent: "left",
              }}
            >
              <h3 className="info-text">Contact Us</h3>
              <p>
                This is some filler text for our website! This is some filler
                text for our website!
              </p>
            </div>
            <div className="divider" />
            <div
              className="container-group"
              style={{
                textAlign: "center",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingBottom: "24px",
                paddingTop: "24px",
                justifyContent: "left",
              }}
            >
              <h3 className="info-text">Find Us On</h3>
              <p>
                This is some filler text for our website! This is some filler
                text for our website!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
