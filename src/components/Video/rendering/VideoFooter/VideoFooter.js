import React, { useState } from "react";
import VideoSidebar from "../VideoSidebar/VideoSidebar";

function VideoFooter({
  title,
  description,
  displayQuiz,
  hasQuiz,
  muted,
  handleMuteUnmute,
  handleTakeNote,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="absolute bottom-5 w-full bg-gradient-to-t  px-2">
      <div className="text-white mt-2 ml-4 mr-10 md:ml-2 md:mr-2">
        
        {/* Title Section */}
        <div className="flex items-center mb-3">
          <img
            alt="pic of course"
            src="https://www.atletiek.nu/img/basicDesign/athletics.app%20logo_white.png"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="ml-3 font-bold text-lg">{title}</span>
        </div>
        
        {/* Description Section */}
        <div className="transition-all font-medium text-base mb-3">
          <p
            className={`leading-tight ${
               "max-h-16 overflow-hidden"
            }`}
            style={{
              display: "-webkit-box",
              WebkitLineClamp:  "3",
              WebkitBoxOrient: "vertical",
              overflow:  "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </p>
        </div>

        {/* Toggle Button */}
        <div
          className="cursor-pointer font-semibold inline-block"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <strong>Show results</strong>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
