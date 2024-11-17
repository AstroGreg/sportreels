import React from "react";
import "./progressSlider.css";

interface ProgressSliderProps {
  played: number;
  handleSkipTo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ProgressSlider({ played, handleSkipTo } : ProgressSliderProps) {
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
