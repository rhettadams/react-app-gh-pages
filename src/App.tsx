///z index documentation: 1 is the background lines, 2 is the image

import DottedLine from "./components/DottedLine";
import Thumbnail from "./components/Thumbnail";
import PopUp from "./components/PopUp";
import DottedHoriLine from "./components/DottedHoriLine";
import RJALogo from "./images/rja icon.svg";

import noodleimage from "./images/noodleimage1.png";
import noodlemedia from "./videos/noodleportfoliopiece.mp4";
import noodleshortimage from "./images/thumbnail-image_2.1.1-16-9.png";
import noodleshortmedia from "./videos/noodleshort.mp4";
import wanshowpng from "./images/wanshowpng.png";
import wanmedia from "./videos/wan portfolio piece.mp4";
import alignmentimage from "./images/alignmentimage.png";
import subhajimage from "./images/blahajsubsideview.png";
import forensicsci from "./images/untitled.png";
import bedadhesion from "./videos/bed adhesion pt2 v2 2.mp4";
import bedadhesionimage from "./images/Untitled_1.7.1.png";
import stringingvideo from "./videos/stringing.mp4";
import stringingimage from "./images/stringing_1.1.1.png";
import introvideo from "./videos/intro.mp4";
import introimage from "./images/intro v2-00;00;06;04.png";
import sqlite from "./images/SQLite_Logo.png";
import sambaimage from "./images/samba.png";

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
              marginTopval="50px"
            >
              Animator and influencer Julian Morley creates animated content for
              Youtube and Patreon platforms. He posts cardboard-puppet videos in
              between his animated features to keep his audience entertained
              during the long production time of animation. I chose to try to
              animate one of his cardboard-puppet videos in Blender. I animated
              a 2D character in a 3D environment. This was a 2 week long project
              I did over the summer and I am very proud of the result.
            </Thumbnail>
            <Thumbnail
              SrcImage={noodleshortimage}
              media={noodleshortmedia}
              hovertext="2D Animation in a 3D World (first iteration)"
              title="Trying 2D Animation in a 3D Enviornment"
              marginTopval="0px"
            >
              Animator and influencer Julian Morley creates animated content for
              Youtube and Patreon platforms. He posts cardboard-puppet videos in
              between his animated features to keep his audience entertained
              during the long production time of animation. I chose to try to
              animate one of his cardboard-puppet videos in Blender. I animated
              a 2D character in a 3D environment. This was a 2 week long project
              I did over the summer and I am very proud of the result.
            </Thumbnail>
            <Thumbnail
              SrcImage={subhajimage}
              media={subhajimage}
              hovertext="Modelling in 3D with Constraints and Goals"
              title="Modelling in 3D with Constraints and Goals"
              marginTopval="250px"
            >
              I was tasked with creating a custom vehicle in a 3D modelling
              course. I chose to create a submirsible based off of a shark that
              I had grown fond of. I took extra care to meet the goals and
              desirables of the project. I put in the extra effort of creating
              wear in the shader and ensuring I got the metallic and reflective
              look I was going for. All this work paid off as I recieved good
              marks on this project.
            </Thumbnail>
            <Thumbnail
              SrcImage={forensicsci}
              media={forensicsci}
              hovertext="Recreating a Crime Scene with Digital Tools"
              title="Recreating a Crime Scene with Digital Tools"
              marginTopval="250px"
            >
              I was tasked with recreating a crime scene with whatever tools I
              chose. Of course, I chose the tool I could create the best output
              with, Blender. I recreated this crime scene too scale with digital
              blood effects and realistic lighting. I completed this within time
              constraints and met project goals. The result was my teacher's
              pride of the class. My teacher claimed it to be some of the best
              he had seen and proudly showed it off to the rest of the
              participants. This leads me to be confident in the quality I can
              produce at an academic and professional level.
            </Thumbnail>

            <DottedLine linelength="1100" collumname="3D Animation" />
          </div>
        </div>
        <div>
          <div
            style={{
              //marginTop: "600px",
              display: "inline-grid",
              justifyContent: "center",
            }}
          >
            <Thumbnail
              SrcImage={bedadhesionimage}
              media={bedadhesion}
              hovertext="15,000 Views in a 3-week period"
              title="15,000 Views in a 3-week period"
              marginTopval="400px"
            >
              I worked hard to specifically optimize my videos to achieve great
              success in the algorithm. I optimized my content based on popular
              user search results. I achieved over 15,000 organic views in under
              3 weeks and recieved over 70 comments as a channel of under 150
              subscribers. This algorithm expertise is something few can master
              and I feel that I am on the road to truely understanding how to
              use this tool.
            </Thumbnail>
            <Thumbnail
              SrcImage={stringingimage}
              media={stringingvideo}
              hovertext="68,000 views on a Youtube Short"
              title="68,000 views on a Youtube Short"
              marginTopval="250px"
            >
              When I started my youtube channel I hoped to gain some experience
              in social media marketing. On only my 3rd video I achieved rapid
              success. As opposed to a typical view-curve of many views at
              publish and a slow death of views, my video has only been
              accelrating into higher and higher view counts, with it recently
              hitting 67,000 views.
            </Thumbnail>
            <Thumbnail
              SrcImage={introimage}
              media={introvideo}
              hovertext="My first motion graphic"
              title="My first motion graphic"
              marginTopval="450px"
            >
              In 2021 I took my first delve into motion graphics. I chose to
              make an intro for a former youtube channel. I carefully selected
              an appropriate musical choice and properly timed keyframes to
              match said music. This piece may be on the older side but I am
              still very proud of it.
            </Thumbnail>
            <DottedLine collumname="Video Editing" linelength="1300" />
          </div>
        </div>
        <div>
          <div
            style={{
              //marginTop: "1000px",
              display: "inline-grid",
              justifyContent: "center",
            }}
          >
            <Thumbnail
              SrcImage={sqlite}
              media={sqlite}
              hovertext="Learning efficient methods of using sqlite"
              title="Learning efficient methods of using sqlite"
              marginTopval="500px"
            >
              I was tasked with building a custom python bot for my school's
              Esports club. I needed to store teams and the discord users of
              said teams. I chose to use sqlite to store these values and
              learned efficient ways to store these values in a way that would
              work consistently for my club. I also learned how to efficiently
              create, organize, and delete databases at a program and terminal
              level.
            </Thumbnail>
            <Thumbnail
              SrcImage={sambaimage}
              media={sambaimage}
              hovertext="Using Samba to better ingest and organize large video files over a Home Network"
              title="Using Samba to better organize video files over a Home Network"
              marginTopval="150px"
            >
              I was struggling to handle management of my many media files for
              my Jellyfin and Video Editing projects, so I turned to Samba for a
              solution. I spent weeks finding the best way to compose a Samba
              Docker container and the result is a consistent and useful tool
              that I use regularly for handling very large media files over my
              network. The current solution runs on a Raspberry Pi 4 with a
              custom SSD boot and HDD storage setup that can store over a
              terabyte of media.
            </Thumbnail>
            <DottedLine collumname="IT" linelength="750px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
