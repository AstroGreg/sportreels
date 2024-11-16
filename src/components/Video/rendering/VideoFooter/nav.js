import React from "react";


function Nav() {


return (

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent">
<div className="flex justify-around">
  {/* Home Button */}
  <button
    onClick={() => alert("Home Clicked")}
    className="text-white flex flex-col items-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9 9v-4a2 2 0 114 0v4m-6 0h6" />
    </svg>
    Home
  </button>

  {/* Search Button */}
  <button
    onClick={() => alert("Search Clicked")}
    className="text-white flex flex-col items-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1114 14a7 7 0 012.65.65l4.35 4.35z" />
    </svg>
    Search
  </button>

  {/* Profile Button */}
  <button
    onClick={() => alert("Profile Clicked")}
    className="text-white flex flex-col items-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.7 0 5.4-1.5 5.4-5.4S14.7 1 12 1 6.6 2.7 6.6 6.6 9.3 12 12 12zm0 0c-3 0-7 1.5-7 4.2v2.1c0 1.2 1 2.1 2.1 2.1h9.8c1.2 0 2.1-1 2.1-2.1v-2.1c0-2.7-4-4.2-7-4.2z" />
    </svg>
    Profile
  </button>

  {/* Additional Menu Item */}
  <button
    onClick={() => alert("Menu Item Clicked")}
    className="text-white flex flex-col items-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
    Menu
  </button>
</div>
</div> );

}

export default Nav;