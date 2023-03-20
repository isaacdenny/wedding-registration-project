import React from "react";
import defaultImg from "../../images/rings.jpg";

const BlockSection = (params) => {
  const flipped = params.isFlipped ? false : true;

  return (
    <>
      {flipped ? (
        <div
          className="section"
          style={params.isAlone ? { paddingTop: "80px" } : {}}
        >
          <div
            className="container"
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
          >
            <div className="container-group" style={{ alignItems: "center" }}>
              <h3>{params.heading ? params.heading : "No Heading"}</h3>
              <p style={{ maxWidth: "310px", textAlign: "center" }}>
                {params.desc ? params.desc : "No Desc"}
              </p>
              <a href={params.buttonHref}>
                <button className="button-primary">
                  {params.buttonText ? params.buttonText : "No Text"}
                </button>
              </a>
            </div>
            <div className="container-group">
              <img className="block-image"
                src={params.imgSrc ? params.imgSrc : defaultImg}
                alt={
                  params.imgAlt
                    ? params.imgAlt
                    : "wedding rings sitting by a flower and a note"
                }
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="section"
          style={
            params.isAlone ? { paddingBottom: "80px", paddingTop: "80px" } : {}
          }
        >
          <div
            className="container"
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
          >
            <div className="container-group">
              <img className="block-image"
                src={params.imgSrc ? params.imgSrc : defaultImg}
                alt={
                  params.imgAlt
                    ? params.imgAlt
                    : "wedding rings sitting by a flower and a note"
                }
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="container-group" style={{ alignItems: "center" }}>
              <h3>{params.heading ? params.heading : "No Heading"}</h3>
              <p style={{ maxWidth: "310px", textAlign: "center" }}>
                {params.desc ? params.desc : "No Desc"}
              </p>
              <a href={params.buttonHref}>
                <button className="button-primary">
                  {params.buttonText ? params.buttonText : "No Text"}
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlockSection;
