import React from "react";

function ArrowDown({width='40', height='40', color='rgb(156 163 175)'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M17.543 14.267a.75.75 0 10-1.086-1.034l1.086 1.034zm-6.086 4.216a.75.75 0 101.086 1.034l-1.086-1.034zm0 1.034a.75.75 0 101.086-1.034l-1.086 1.034zm-3.914-6.284a.75.75 0 10-1.086 1.034l1.086-1.034zM11.25 19a.75.75 0 001.5 0h-1.5zm1.5-14a.75.75 0 00-1.5 0h1.5zm3.707 8.233l-5 5.25 1.086 1.034 5-5.25-1.086-1.034zm-3.914 5.25l-5-5.25-1.086 1.034 5 5.25 1.086-1.034zm.207.517V5h-1.5v14h1.5z"
      ></path>
    </svg>
  );
}

function ArrowUp({width='40', height='40', color='rgb(156 163 175)'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M6.457 9.733a.75.75 0 101.086 1.034L6.457 9.733zm6.086-4.216a.75.75 0 10-1.086-1.034l1.086 1.034zm0-1.034a.75.75 0 10-1.086 1.034l1.086-1.034zm3.914 6.284a.75.75 0 101.086-1.034l-1.086 1.034zM12.75 5a.75.75 0 00-1.5 0h1.5zm-1.5 14a.75.75 0 001.5 0h-1.5zm-3.707-8.233l5-5.25-1.086-1.034-5 5.25 1.086 1.034zm3.914-5.25l5 5.25 1.086-1.034-5-5.25-1.086 1.034zM11.25 5v14h1.5V5h-1.5z"
      ></path>
    </svg>
  );
}

export function ArrowRight({width='25', height='25', color='rgb(156 163 175)'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h16m0 0l-4-4m4 4l-4 4"
      ></path>
    </svg>
  );
}

export function ArrowLeft({width='25', height='25', color='rgb(156 163 175)'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h16M4 12l4-4m-4 4l4 4"
      ></path>
    </svg>
  );
}


export function BendedArrow({width='20', height='20', color='rgb(156 163 175)'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M8.423 7.522a.75.75 0 00-1.078-1.044l1.078 1.044zM4.46 9.454a.75.75 0 101.078 1.044L4.46 9.454zm1.061-.016a.75.75 0 00-1.044 1.076l1.044-1.076zm1.84 3.876a.75.75 0 001.044-1.076l-1.044 1.076zM5 9.226a.75.75 0 000 1.5v-1.5zm10.62.75l.015-.75a.8.8 0 00-.015 0v.75zM19 13.488l-.75-.014v.028l.75-.014zM15.62 17v.75h.015L15.62 17zM5 16.25a.75.75 0 000 1.5v-1.5zm2.345-9.772L4.461 9.454l1.078 1.044 2.884-2.976-1.078-1.044zm-2.867 4.036l2.884 2.8 1.044-1.076-2.884-2.8-1.044 1.076zm.522.212h10.62v-1.5H5v1.5zm10.605 0a2.698 2.698 0 012.645 2.748l1.5.028a4.198 4.198 0 00-4.115-4.276l-.03 1.5zm2.645 2.776a2.698 2.698 0 01-2.645 2.748l.03 1.5a4.198 4.198 0 004.115-4.276l-1.5.028zm-2.63 2.748H5v1.5h10.62v-1.5z"
      ></path>
    </svg>
  );
}

export function VerticalArrows({isUp = true, onClick, width, height}) {

  return(
    <button onClick={onClick} className="cursor-pointer">
      {
        isUp ? <ArrowUp width={width} height={height}/> : <ArrowDown width={width} height={height}/>
      }
    </button>
    
  )
}