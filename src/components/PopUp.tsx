import React, { Children, ReactNode } from "react";
import "../App.css";
import videothing from "../videos/noodleportfoliopiece.mp4";
import MediaComponent from "./MediaComponent";
import VideoPlayerThing from "./VideoPlayerThing";

import { render } from "react-dom";

import VideoPlayer from "./video";

import "../app.css";

//var videothing = "../videos/noodleportfoliopiece.mp4";

interface Props {
  display: boolean;
  closePopup: () => void;
  children: ReactNode;
}

const videoJsOptions = {
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
  ],
};

const PopUp = ({ display, closePopup, children }: Props) => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        height: "100%",
        top: "0px",
        bottom: "0px",
      }}
      className={display ? "Show" : "Hide"}
      id="thingythingthing1"
    >
      <div style={{ position: "fixed", width: "100%", height: "100%" }}>
        <div
          style={{
            //marginTop: "0px",
            position: "fixed",
            zIndex: 5,
            width: "100%",
            height: "100%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className={display ? "Show" : "Hide"}
          id="thingythingthing"
        >
          <svg width="100%" height="100%" style={{ position: "fixed" }}>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              style={{
                fill: "#000000",
                opacity: 0.5,
              }}
              onClick={closePopup}
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 177 100"
            style={{ position: "fixed", pointerEvents: "none" }}
          >
            <rect
              x="0"
              y="0"
              width="90%"
              height="90%"
              rx="5"
              style={{
                fill: "#58bdd3",
                opacity: 1,

                transform: "translate(5%, 5%)",
                pointerEvents: "auto",
              }}
            ></rect>
            <foreignObject
              x="5%"
              y="5%"
              width="90%"
              height="90%"
              className="LightMargin"
            >
              <div
                className="ThumbnailContainer"
                style={{
                  width: "90%",
                  height: "90%",
                  transform: "translate(5%, 5%)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    pointerEvents: "auto",
                  }}
                  className="ThumbnailGridArea "
                >
                  <div className="centerVertically roundedCorner">
                    <VideoPlayer options={videoJsOptions} />
                  </div>
                </div>
                <div className="textend ">
                  <h3
                    className="nomargin outlinedgradientbackg"
                    style={{ fontSize: "5px", alignSelf: "end" }}
                  >
                    It all starts with an idea
                  </h3>
                </div>
                <div className="textstart" style={{ fontSize: "2.5px" }}>
                  <p>{children}</p>
                </div>
              </div>
            </foreignObject>
          </svg>
          <div
            style={{
              width: "90%",
              height: "90%",
              position: "fixed",
              pointerEvents: "none",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
