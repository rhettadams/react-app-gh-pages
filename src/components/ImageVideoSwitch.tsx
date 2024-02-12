import React from "react";

import { render } from "react-dom";

import VideoPlayer from "./video";

interface Props {
  media: any; //media source
}

const ImageVideoSwitch = ({ media }: Props) => {
  const videoJsOptions = {
    sources: [
      {
        src: media,
        type: "video/mp4",
      },
    ],
  };
  var medianame = media.toString();
  var isVideo = medianame.endsWith(".mp4");
  var isImage = medianame.endsWith(".png");
  if (isVideo) {
    console.log("Selected media" + medianame + " is a video");
    return <VideoPlayer options={videoJsOptions} />;
  } else if (isImage) {
    console.log("Selected media" + medianame + " is an image");
    return <img height="100%" width="100%" src={media}></img>;
  } else {
    console.log(
      "Selected media" + medianame + " is an unsupported file ending or format"
    );
    return <div>Selected media is unsupported, please use .mp4 or .png</div>;
  }
};

export default ImageVideoSwitch;
