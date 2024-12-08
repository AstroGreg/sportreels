import React, { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Menu from "./pages/Menu";
import Athlete from "./pages/Athlete";

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
    <Router>
      <div className="app">
        <div className="flex flex-col items-center w-full h-full">
          <div
            className="w-full overflow-y-auto bg-gray-50"
            style={{ height: "90vh", maxWidth: "540px" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/athlete/:id" element={<Athlete />} />
            </Routes>
          </div>
          <div
            className="flex-shrink-0 w-full bg-white border-b border-gray-300"
            style={{ height: "10vh", maxWidth: "540px" }}
          >
            <Nav />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
