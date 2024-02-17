import { useRef } from "react";

interface Props {
  linelength: string;
  collumname: string;
}

const DottedLine = ({ linelength, collumname }: Props) => {
  return (
    <svg
      width="300"
      height={linelength}
      style={{
        position: "absolute",
        marginTop: "10%",
        //transform: "translate(-50%, 0%)",
        zIndex: 1,
        pointerEvents: "none",
        justifySelf: "center",
      }}
    >
      <foreignObject
        y="-10"
        width="100%"
        height="100%"
        style={{ textAlign: "center" }}
      >
        <h1 className="darkmodelightmodetext">{collumname}</h1>
      </foreignObject>
      <line
        x1="50%"
        y1="40"
        x2="50%"
        y2={linelength}
        style={{
          strokeWidth: 2,

          strokeDasharray: "5 5",
          pointerEvents: "none",
        }}
        className="verticalLineColor"
      />
      <line
        x1="20%"
        y1="40"
        x2="80%"
        y2="40"
        style={{
          strokeWidth: 2,

          strokeDasharray: "5 5",
          pointerEvents: "none",
        }}
        className="verticalLineColor"
      />
    </svg>
  );
};

export default DottedLine;
