import React from "react";

function Tick({width='20', height='20', color='rgb(74 222 128)'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 -0.5 25 25"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.5 12.5l4.667 4.5L19.5 8"
      ></path>
    </svg>
  );
}

export default Tick;