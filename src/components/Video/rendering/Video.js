import React, { useEffect, useRef, useState, useCallback } from "react";
import "../styling/video.css";

import { calculatePlayedPercentage } from "../utils/videoUtils";
import { useVideo } from "../utils/useVideo";

function Video({ url, index, setVideoRef, muted }) {
  const videoRef = useRef(null);
  const { currentTime, duration, setCurrentTime } = useVideo(videoRef);
  const played = calculatePlayedPercentage(currentTime, duration);

// Tijd skippen bij aanpassing slider
// const handleSkipTo = (e) => {
//   const newTime = (e.target.value / 100) * duration;
//   if (videoRef.current) {
//     videoRef.current.currentTime = newTime;
//     setCurrentTime(newTime);  // Alleen nodig voor direct visuele update
//   }
// };

// Video afspelen of pauzeren bij klik
const onVideoPress = () => {
  if (videoRef.current) {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
};
  return (
    <>
      <video
        index={index}
        className="player"
        onClick={onVideoPress}
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref);
        }}
        width="100%"
        height="100%"
        playsInline
        loop
        muted={muted}
        src={url}
      />

      {/* <ProgressSlider played={played} onChange={handleSkipTo} /> */}
    </>
  );
}

export default Video;
