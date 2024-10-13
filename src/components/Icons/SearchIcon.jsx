import { mainColor } from "../../styles/constants";

function SearchIcon({width='800', height='800'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className="flex justify-center h-full ml-2 mr-2"
    >
      <path
        fill={`#${mainColor}`}
        fillRule="evenodd"
        d="M4 11a7 7 0 1114 0 7 7 0 01-14 0zm7-9a9 9 0 105.618 16.032l3.675 3.675a1 1 0 001.414-1.414l-3.675-3.675A9 9 0 0011 2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SearchIcon;