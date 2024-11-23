import React, { useState } from "react";
import { default as mute} from "../../icons/mute.svg"; 
import { default as unmute} from "../../icons/unmute.svg";
import { default as share} from "../../icons/share.svg";

function VideoSidebar({ muted, handleMuteUnmute }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const currentUrl = window.location.href; // Get the current URL
  
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use the Clipboard API if supported
      navigator.clipboard.writeText(currentUrl)
        .then(() => setCopied(true))
        .catch(() => alert("Failed to copy link"));
    } else {
      // Fallback for older browsers or unsupported environments
      const textarea = document.createElement("textarea");
      textarea.value = currentUrl;
      textarea.style.position = "fixed"; // Avoid scrolling to the bottom
      textarea.style.opacity = "0"; // Make it invisible
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch (error) {
        alert("Failed to copy link");
      }
      document.body.removeChild(textarea);
    }
  
    setTimeout(() => setCopied(false), 2000); // Hide success message after 2 seconds
  };

  return (
    <div className="absolute right-0 flex flex-col justify-end h-1/5 text-white top-1/2 bottom-auto mr-1">
      {/* Note Icon */}
      {/* <div
        className="p-2 mb-2 text-center cursor-pointer bg-opacity-75 hover:bg-opacity-90 transition duration-300 ease-in-out"
        onClick={handleTakeNote}
      >
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
            d="M8 16h8m-8-4h8m2-10H6a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z"
          />
        </svg>
      </div> */}

      {/* Mute/Unmute Icon */}
      <div
        className="p-2 mb-2 text-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 cursor-pointer z-2"
        onClick={handleMuteUnmute}
      >
      
        {muted ? (
           <img src={unmute} alt="unmute" className="h-6" />
        ) : (
            <img src={mute} alt="mute" className="h-6"  />
        )}
      </div>

      {/* Share Icon */}
      <div
        className="p-2 mb-2 text-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 cursor-pointer z-2"
        onClick={handleShare}
      >
        <img src={share} alt="share" className="h-6" />
      </div>

      {/* Copied Message */}
      {copied && (
        <div className="absolute bottom-12 right-2 p-2 bg-blue-600 text-sm rounded-md shadow-md z-1">
          Link copied!
        </div>
      )}
    </div>
  );
}

export default VideoSidebar;
