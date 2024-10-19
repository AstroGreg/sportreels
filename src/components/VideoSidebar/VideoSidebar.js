import React from "react";
import "./VideoSidebar.css";
// import useVideoPlayer from "./hooks/useVideoPlayer";


function VideoSidebar({ muted, handleMuteUnmute, handleTakeNote }) {
  // const { handleSkipToTime } = useVideoPlayer(videoRef);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">

        <div><small><strong>7/10</strong></small></div>
      </div>
      
      <div className="videoSidebar__button" onClick={handleTakeNote}>
        <div><small><strong>Note</strong></small></div>
      </div>

      <div className="videoSidebar__button" onClick={handleMuteUnmute}>
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
