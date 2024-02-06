interface Props {
  linelength: string;
}

const DottedLine = ({ linelength }: Props) => {
  return (
    <svg
      width="100"
      height={linelength}
      style={{
        position: "absolute",
        top: "10%",
        //transform: "translate(-50%, 0%)",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2={linelength}
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

export default DottedLine;
