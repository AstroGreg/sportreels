import React from "react";
import "./VideoSidebar.css";
// import useVideoPlayer from "./hooks/useVideoPlayer";
import { FiPenTool } from "react-icons/fi";
import { MdVolumeOff, MdLibraryBooks,MdOutlineVolumeUp } from "react-icons/md";

function VideoSidebar({ muted, handleMuteUnmute, handleTakeNote }) {
  // const { handleSkipToTime } = useVideoPlayer(videoRef);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <MdLibraryBooks className="icons" />
        <div><small><strong>7/10</strong></small></div>
      </div>
      
      <div className="videoSidebar__button" onClick={handleTakeNote}>
        <FiPenTool className="icons" />
        <div><small><strong>Note</strong></small></div>
      </div>

      <div className="videoSidebar__button" onClick={handleMuteUnmute}>
        {muted ? <MdVolumeOff className="icons" /> : <MdOutlineVolumeUp className="icons" />}
        <div><small><strong>{muted ? "Unmute" : "Mute" }</strong></small></div>
      </div>

      {/* {quizOptions.quizOptions.map((quizOption, index) => (
        <div
          className={`videoSidebar__button ${
            quizOptions.isCorrectAnswer ? "yellow" : "purple"
          }`}
          onClick={() => handleSkipToTime(index, quizOptions.optionRedirects)}
        >
          {quizOption}
        </div>
      ))} */}
    </div>
  );
}

export default VideoSidebar;
