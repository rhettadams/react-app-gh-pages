///z index documentation: 1 is the background lines, 2 is the image

import DottedLine from "./components/DottedLine";
import Thumbnail from "./components/Thumbnail";
import noodleimage from "./images/noodleimage1.png";
import wanshowpng from "./images/wanshowpng.png";
import alignmentimage from "./images/alignmentimage.png";
import PopUp from "./components/PopUp";
import DottedHoriLine from "./components/DottedHoriLine";

const LeftColl = "20%";
const MidColl = "50%";
const RightColl = "80%";

const linelength = "1000";

function App() {
  return (
    <div>
      <DottedHoriLine linelength="1000" />
      <div id="container">
        <div>
          <div
            style={{
              marginTop: "300px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Thumbnail YTransform={200} SrcImage={noodleimage}>
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
            <Thumbnail YTransform={600} SrcImage={wanshowpng}>
              children
            </Thumbnail>
            <DottedLine linelength={linelength} />
          </div>
        </div>
        <div>
          <div
            style={{
              marginTop: "800px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Thumbnail YTransform={1500} SrcImage={alignmentimage}>
              children
            </Thumbnail>
            <DottedLine linelength={linelength} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
