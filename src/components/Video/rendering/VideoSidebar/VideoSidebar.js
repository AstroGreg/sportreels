import React from "react";

function VideoSidebar({ muted, handleMuteUnmute, handleTakeNote }) {
  return (
    <div className="absolute  right-0 flex flex-col justify-end h-1/5 text-white top-1/2 bottom-auto">
      <div
        className="p-2 mb-2 text-center cursor-pointer bg-opacity-75 hover:bg-opacity-90 transition duration-300 ease-in-out"
        onClick={handleTakeNote}
      >
        <small><strong>Note</strong></small>
      </div>

      <div
        className="p-2 mb-2 text-center cursor-pointer bg-opacity-75 hover:bg-opacity-90 transition duration-300 ease-in-out"
        onClick={handleMuteUnmute}
      >
        <small><strong>{muted ? "Unmute" : "Mute"}</strong></small>
   
      </div>
      <div
        className="p-2 mb-2 text-center cursor-pointer bg-opacity-75 hover:bg-opacity-90 transition duration-300 ease-in-out"
     
      >
        <small><strong>Share</strong></small>
      </div>
    </div>
  );
}

export default VideoSidebar;
