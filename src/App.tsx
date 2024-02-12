///z index documentation: 1 is the background lines, 2 is the image

import DottedLine from "./components/DottedLine";
import Thumbnail from "./components/Thumbnail";
import noodleimage from "./images/noodleimage1.png";
import wanshowpng from "./images/wanshowpng.png";
import alignmentimage from "./images/alignmentimage.png";
import PopUp from "./components/PopUp";
import DottedHoriLine from "./components/DottedHoriLine";
import noodlemedia from "./videos/noodleportfoliopiece.mp4";
import RJALogo from "./images/rja icon.svg";

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
          <h3 style={{ fontSize: "20px" }}>CONTACT</h3>
        </button>
      </div>

      <div id="container">
        <div>
          <div
            style={{
              marginTop: margtopoffset + 300 + "px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Thumbnail
              SrcImage={noodleimage}
              media={noodlemedia}
              hovertext="hello"
              hovertextfntsize={40}
              title="Animating a short-film that couldn't be Aniamted"
            >
              Animator and influencer Julian Morley creates animated content for
              Youtube and Patreon platforms. He posts cardboard-puppet videos in
              between his animated features to keep his audience entertained
              during the long production time of animation. I chose to try to
              animate one of his cardboard-puppet videos in Blender. I animated
              a 2D character in a 3D environment. This was a 2 week long project
              I did over the summer and I am very proud of the result.
            </Thumbnail>
            <DottedLine linelength={linelength} />
          </div>
        </div>
        <div>
          <div
            style={{
              marginTop: "600px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Thumbnail
              SrcImage={wanshowpng}
              media={noodlemedia}
              hovertext="hello"
              hovertextfntsize={40}
              title="Animating a short-film that couldn't be Aniamted"
            >
              Animator and influencer Julian Morley creates animated content for
              Youtube and Patreon platforms. He posts cardboard-puppet videos in
              between his animated features to keep his audience entertained
              during the long production time of animation. title="Animating a
              short-film that couldn't be Aniamted"
            </Thumbnail>
            <DottedLine linelength={linelength} />
          </div>
        </div>
        <div>
          <div
            style={{
              marginTop: "1000px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Thumbnail
              SrcImage={alignmentimage}
              media="./images/noodleimage1.png"
              hovertext="2D Animation in a 3D Space"
              hovertextfntsize={23}
              title="Animating a short-film that couldn't be Aniamted"
            >
              children of the earth title="Animating a short-film that couldn't
              be Aniamted"
            </Thumbnail>
            <DottedLine linelength={linelength} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
