// BackToMenu.js
import React from "react";

interface BackIconProps {
  onBack: () => void;
}

function BackIcon({ onBack, Isscroll  } : BackIconProps) {
  return (


    <div className="absolute z-50 p-2 bg-black bg-opacity-50 rounded-full cursor-pointer top-4 left-4 hover:bg-opacity-70" onClick={onBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>


  );
}

export default BackIcon;
