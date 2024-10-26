import React from "react";
import "../styling/video.css";

function ProgressSlider({ played, onChange }) {
  return (
    <input
      className="videofooter"
      type="range"
      style={{ backgroundSize: `${played}%` }}
      min="0"
      max="100"
      step="any"
      value={played}
      onChange={onChange}
    />
  );
}

export default ProgressSlider;
