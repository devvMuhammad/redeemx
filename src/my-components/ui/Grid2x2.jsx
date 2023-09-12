import React from "react";

function Grid2x2(props) {
  return (
    <span className="text-white hover:text-gray-500 cursor-pointer" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-grid-2x2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    </span>
  );
}

export default Grid2x2;
