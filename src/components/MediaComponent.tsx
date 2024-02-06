import React from "react";

interface Props {
  mediafile: string;
}

const MediaComponent = ({ mediafile }: Props) => {
  const mediafilename = mediafile.toString();
  const isImage = mediafilename.endsWith(".png");
  const isVideo = mediafilename.endsWith(".mp4");
  console.log("is a video?" + isVideo);

  if (isImage) {
    return <image>src={mediafile}</image>;
  } else if (isVideo) {
    console.log("it is a video and we are showing it");
    return (
      <video
        className="objectfitcover"
        style={{
          width: "50%",
          height: "50%",
          zIndex: 6,
        }}
      >
        <source src={mediafile} type="video/mp4" />
      </video>
    );
  }
  /*
  return (
    //<video>src={isVideo ? "/videos/video.mp4" : "/pictures/picture.jpg"}</video>
  );
  */
};

export default MediaComponent;
