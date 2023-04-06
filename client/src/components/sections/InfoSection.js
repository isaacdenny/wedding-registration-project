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
            className="info-container"
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
                Twin Falls, ID!
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
                AllieAndIsaacWedding@gmail.com
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
              <a href="https://www.youtube.com/channel/UCY5C07OGD1ZBjNu1jRbueKg">
                Youtube
              </a>
              <a href="https://www.instagram.com/isaacquinndenny/">
                Instagram (Isaac)
              </a>
              <a href="https://www.instagram.com/alllie.runyan/">
                Instagram (Allie)
              </a>
              <a href="https://twitter.com/IsaacDenny_cs">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
