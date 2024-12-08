import React from "react";
import { default as mute } from "../../icons/mute.svg";
import { default as unmute } from "../../icons/unmute.svg";
import { default as share } from "../../icons/share.svg";
import { useShare } from "../../utils/useShare";

function VideoSidebar({ muted, handleMuteUnmute, openReportModal }) {
  const { copied, handleShare } = useShare();

  return (
    <div className="absolute right-0 bottom-auto flex flex-col justify-end mr-1 text-white h-1/5 top-1/2">
      {/* Mute Icon */}
      <div
        className="p-2 mb-2 text-center bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70 z-2"
        onClick={handleMuteUnmute}
      >
        {muted ? (
          <img src={mute} alt="mute" className="h-6" />
        ) : (
          <img src={unmute} alt="unmute" className="h-6" />
        )}
      </div>
      {/* Share Icon */}
      <div
        className="p-2 mb-2 text-center bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70 z-2"
        onClick={handleShare}
      >
        <img src={share} alt="share" className="h-6" />
      </div>
      {/* Report Mistake Icon */}
      <div
        className="p-2 mb-2 text-center bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70 z-2"
        onClick={openReportModal}
      >
        {/* Report Icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 2H6a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z"
          />
        </svg>
      </div>
      {/* Copied Message */}
      {copied && (
        <div className="absolute p-2 text-sm bg-blue-600 rounded-md shadow-md bottom-12 right-2 z-1">
          Link copied!
        </div>
      )}
    </div>
  );
}

export default VideoSidebar;
