import React from "react";
import "../styling/video.css";

function ProgressSlider({ played, handleSkipTo }) {
  return (
    <input
      className="videofooter"
      type="range"
      style={{ backgroundSize: `${played}%` }}
      min="0"
      max="100"
      step="any"
      value={played}
      onChange={(e) => {
        handleSkipTo(e);
      }}
    />
  );
}

export default ProgressSlider;
