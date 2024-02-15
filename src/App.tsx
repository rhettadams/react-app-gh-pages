///z index documentation: 1 is the background lines, 2 is the image

import DottedLine from "./components/DottedLine";
import Thumbnail from "./components/Thumbnail";
import PopUp from "./components/PopUp";
import DottedHoriLine from "./components/DottedHoriLine";
import RJALogo from "./images/rja icon.svg";

import noodleimage from "./images/noodleimage1.png";
import noodlemedia from "./videos/noodleportfoliopiece.mp4";
import wanshowpng from "./images/wanshowpng.png";
import wanmedia from "./videos/wan portfolio piece.mp4";
import alignmentimage from "./images/alignmentimage.png";

const LeftColl = "20%";
const MidColl = "50%";
const RightColl = "80%";

const linelength = "1000";
const lineoffset = 200;

const margtopoffset = 200;

function opencontact() {
  open("https://linktr.ee/rhettadams");
}

function App() {
  return (
    <div className="backgroundGradient">
      <div
        className="topbar"
        style={{
          width: "99%",
          height: "10%",
          position: "fixed",
          transform: "translate(.5%, 5%)",
          zIndex: 3,
        }}
      >
        <img
          style={{ height: "100%", top: "0", left: "0" }}
          src={RJALogo}
          alt="RJA Logo"
          className="filterinvert"
        />
        <button
          style={{
            width: "8%",
            height: "70%",
            top: "15%",
            right: "1%",
            borderRadius: "10px",
            position: "fixed",
          }}
          className="buttonstyle "
          type="button"
          onClick={opencontact}
        >
          <h3
            className="darkmodelightmodetext"
            style={{ fontSize: "1.6vw", display: "inline-block" }}
          >
            CONTACT
          </h3>
        </button>
      </div>

      <div id="container">
        <div>
          <div
            style={{
              //marginTop: margtopoffset + 300 + "px",
              display: "inline-grid",
              justifyContent: "center",
            }}
          >
            <Thumbnail
              SrcImage={wanshowpng}
              media={wanmedia}
              hovertext="hello"
              title="3D pixel art with 3D lighting and rigging."
              marginTopval="250px"
            >
              (DISCLAIMER: I did not make the clip at the end of characters
              carrying a couch nor do I claim any ownership of any intellectual
              property or affiliation with LMG.) The WAN Show is an online talk
              showand podcast. On the show a host mentioned the need for a new
              intro. I decided to attempt to recreate their old intro in blender
              with dynamic lighting and 3D rigging. All characters in my version
              are 3d characters animated and lit in 3D.
            </Thumbnail>
            <Thumbnail
              SrcImage={noodleimage}
              media={noodlemedia}
              hovertext="2D Animation in a 3D World"
              title="Animating a short-film that couldn't be Aniamted"
              marginTopval="300px"
            >
              Animator and influencer Julian Morley creates animated content for
              Youtube and Patreon platforms. He posts cardboard-puppet videos in
              between his animated features to keep his audience entertained
              during the long production time of animation. I chose to try to
              animate one of his cardboard-puppet videos in Blender. I animated
              a 2D character in a 3D environment. This was a 2 week long project
              I did over the summer and I am very proud of the result.
            </Thumbnail>

            <DottedLine linelength={linelength} collumname="3D Animation" />
          </div>
        </div>
        <div>
          <div
            style={{
              //marginTop: "600px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Thumbnail
              SrcImage={alignmentimage}
              media="./images/noodleimage1.png"
              hovertext="2D Animation in a 3D Space"
              title="children of the earth"
              marginTopval="1000px"
            >
              children of the earth
            </Thumbnail>
            <DottedLine collumname="Video Editing" linelength={linelength} />
          </div>
        </div>
        <div>
          <div
            style={{
              //marginTop: "1000px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Thumbnail
              SrcImage={alignmentimage}
              media="./images/noodleimage1.png"
              hovertext="2D Animation in a 3D Space"
              title="children of the earth"
              marginTopval="1000px"
            >
              children of the earth
            </Thumbnail>
            <DottedLine collumname="IT" linelength={linelength} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
