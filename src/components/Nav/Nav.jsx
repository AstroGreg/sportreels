// Nav.js
// In Header.tsx
import { Link } from "react-router-dom";
import React from "react";
 


function Nav(  ) {  
  return (
    <nav className="relative max-w-[540px] w-full h-[10vh] bottom-0 rounded-bl-xl rounded-br-xl bg-white">
      <div className="flex justify-around items-center h-full">
        {/* Home Button */}
        <Link 
          to="/"
          className="text-slate-700 flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7m-9 9v-4a2 2 0 114 0v4m-6 0h6"
            />
          </svg>
          Home
        </Link>

        {/* Search Button */}
        <Link
          to="/Search"
          className="text-slate-700 flex flex-col items-center"
        >
        <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mb-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-4.35-4.35m0 0a7 7 0 111-1.65 7 7 0 01-1 .65z"
    />
  </svg>
          Search
        </Link>
        <Link
          to="/Upload"
          className="text-slate-700 flex flex-col items-center"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mb-1">
        <path d="M12 2c.41 0 .75.34.75.75v12.69l3.5-3.5a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.5 3.5V2.75c0-.41.34-.75.75-.75zM4 18.75A.75.75 0 0 1 4.75 18h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75z" />
      </svg>

          Upload
        </Link>

        {/* Additional Menu Item */}
        <Link
          to="/Menu"
          className="text-slate-700 flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          Menu
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
