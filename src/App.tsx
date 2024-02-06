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
            <Thumbnail YTransform={200} SrcImage={noodleimage} />
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
            <Thumbnail YTransform={600} SrcImage={wanshowpng} />
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
            <Thumbnail YTransform={1500} SrcImage={alignmentimage} />
            <DottedLine linelength={linelength} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
