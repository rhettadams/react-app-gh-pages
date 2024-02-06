import React from "react";
import "../App.css";
import videothing from "../videos/noodleportfoliopiece.mp4";
import MediaComponent from "./MediaComponent";

//var videothing = "../videos/noodleportfoliopiece.mp4";

interface Props {
  display: boolean;
  closePopup: () => void;
}

const PopUp = ({ display, closePopup }: Props) => {
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
            >
              <video
                style={{
                  position: "fixed",
                  width: "10%",
                  zIndex: 6,
                  marginTop: "10%",
                }}
              >
                <source src={videothing} type="video/mp4" />
              </video>
            </rect>
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
                <div className="ThumbnailGridArea ">
                  <video
                    controls={true}
                    style={{
                      pointerEvents: "auto",
                      width: "312.5%",
                      height: "312.5%",
                      transform: "scale(0.32)",
                      transformOrigin: "left",
                    }}
                    className="CenteredClass"
                  >
                    <source src={videothing} type="video/mp4" />
                  </video>
                </div>

                <div className="textend">
                  <h3
                    className="nomargin"
                    style={{ fontSize: "5px", alignSelf: "end" }}
                  >
                    It all starts with an idea
                  </h3>
                </div>
                <div className="textstart" style={{ fontSize: "2.5px" }}>
                  <p>
                    Animator and influencer Julian Morley creates animated
                    content for Youtube and Patreon platforms. He posts
                    cardboard-puppet videos in between his animated features to
                    keep his audience entertained during the long production
                    time of animation. I chose to try to animate one of his
                    cardboard-puppet videos in Blender. I animated a 2D
                    character in a 3D environment. This was a 2 week long
                    project I did over the summer and I am very proud of the
                    result.
                  </p>
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
