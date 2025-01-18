// Nav.js
// In Header.tsx
import { Link } from "react-router-dom";
import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import {
  homeOutline,
  searchOutline,
  menuOutline,
  cloudUploadOutline,
} from "ionicons/icons";

function Nav() {
  return (
    <nav className="relative max-w-[540px] w-full h-[10vh] bottom-0 rounded-bl-xl rounded-br-xl bg-white">
      <div className="flex items-center justify-around h-full">
        {/* Home Button */}
        <Link to="/" className="flex flex-col items-center text-slate-700">
          <IonIcon className="w-6 h-6 mb-1" icon={homeOutline}></IonIcon>
          Home
        </Link>

        {/* Search Button */}
        <Link
          to="/Search"
          className="flex flex-col items-center text-slate-700"
        >
          <IonIcon className="w-6 h-6 mb-1" icon={searchOutline}></IonIcon>
          Search
        </Link>
        <Link
          to="/Upload"
          className="flex flex-col items-center text-slate-700"
        >
          <IonIcon className="w-6 h-6 mb-1" icon={cloudUploadOutline}></IonIcon>
          Upload
        </Link>

        {/* Additional Menu Item */}
        <Link to="/Menu" className="flex flex-col items-center text-slate-700">
          <IonIcon className="w-6 h-6 mb-1" icon={menuOutline}></IonIcon>
          Menu
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
