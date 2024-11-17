import React, { useEffect, useRef, useCallback, useState } from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/search";


function App() {
 // State to toggle between Home and Search
 const [currentPage, setCurrentPage] = useState("Home");
 // Dynamic viewport height update to handle mobile browser height inconsistencies
 useEffect(() => {
  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  setViewportHeight(); // Initial call
  window.addEventListener("resize", setViewportHeight); // Update on resize
  return () => window.removeEventListener("resize", setViewportHeight);
}, []);

  const handlePageSwitch = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      {currentPage === "Home" && <Home  Nav={<Nav handlePageSwitch={handlePageSwitch}/>} />}
      {currentPage === "Search" && <Search  Nav={<Nav handlePageSwitch={handlePageSwitch}/>} />}
    </div>
  );
}

export default App;
