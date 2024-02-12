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
        top: "20%",
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
          strokeWidth: 2,

          strokeDasharray: "5 5",
          pointerEvents: "none",
        }}
        className="verticalLineColor"
      />
      <foreignObject>
        <div
          style={{
            position: "absolute",
            transform: "translate(15%, 0%)",
            zIndex: 8,
          }}
        >
          <h3>1234</h3>
        </div>
      </foreignObject>
    </svg>
  );
};

export default DottedLine;
