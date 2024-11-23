import React, { useEffect, useRef, useCallback, useState } from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Menu from "./pages/Menu";


function App() {
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
  return (
   <Router className="app">
     <div className="flex flex-col items-center h-full w-full bg-purple-100">
      <div className="bg-gray-50 w-full overflow-y-auto" style={{ height: "90vh", maxWidth: "540px" }}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
      <div className="bg-white w-full border-b border-gray-300 flex-shrink-0" style={{ height: "10vh", maxWidth: "540px" }} >
         <Nav />
      </div>
     </div>
   </Router>
  );
}

export default App;
