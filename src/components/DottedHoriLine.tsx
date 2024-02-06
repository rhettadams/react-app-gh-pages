interface Props {
  linelength: string;
}

const DottedHoriLine = ({ linelength }: Props) => {
  return (
    <svg
      width={linelength}
      height="100%"
      style={{
        position: "fixed",
        top: "0%",
        //transform: "translate(-50%, 0%)",
        zIndex: 9,
        pointerEvents: "none",
      }}
    >
      <line
        x1="0"
        y1="50%"
        x2={linelength}
        y2="50%"
        style={{
          stroke: "rgb(255,0,0)",

          strokeWidth: 2,

          strokeDasharray: "5 5",
          pointerEvents: "none",
        }}
      />
    </svg>
  );
};

export default DottedHoriLine;
