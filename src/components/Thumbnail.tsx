import React, { ReactNode, useState } from "react";
import "../App.css";
import PopUp from "./PopUp";
//import PopUp from "./PopUp";

import noodleimage1 from "../images/noodleimage1.png";

interface Props {
  SrcImage: string;
  children: ReactNode;
  media: any;
  hovertext: string;

  title: string;
  marginTopval: string;
}

var visibility = false;
var displayvar = "none";

function ToggleDisplay() {
  if (visibility) {
    displayvar = "none";
    visibility = false;
    console.log(displayvar);
  } else {
    displayvar = "block";
    visibility = true;
    console.log(displayvar);
  }
}

const Thumbnail = ({
  SrcImage,
  children,
  media,
  hovertext,
  marginTopval,

  title,
}: Props) => {
  const [visible, setVisible] = useState(false); // initiate it at false
  function OnClickThing() {
    setVisible(true);
    console.log("visible state is:" + visible);
  }
  return (
    <div style={{ marginTop: marginTopval }}>
      <PopUp
        display={visible}
        closePopup={() => setVisible(false)}
        media={media}
        title={title}
      >
        {children}
      </PopUp>
      <div
        style={{
          position: "relative",
          //position: "absolute",
          //transform: `translate(0%, ${YTransform}px)`,
          //maxWidth: "90%",
          ///attempting to solve weird scaling between images, I think I fixed it by downscaling the 4k noodle image
          zIndex: 2,
          //marginTop: YTransform,
          cursor: "pointer",
        }}
      >
        <img
          src={SrcImage}
          className="img-responsive unhighlightable thumbnailOutline"
          id="thumbnail"
          alt="Cinque Terre"
          onClick={() => OnClickThing()}
          style={{
            width: "100%",
            //height: "35%",
            borderRadius: "5%/10%",
            //position: "relative",
            //transform: `translate(-50%, 0px)`,
            zIndex: 5,
          }}
        ></img>
        <h1
          id="hovertext"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            height: "auto",
            width: "100%",

            whiteSpace: "normal",
            textAlign: "center",
          }}
          className="darkmodelightmodetexthover child"
        >
          {hovertext}
        </h1>
      </div>
    </div>
  );
};

export default Thumbnail;
