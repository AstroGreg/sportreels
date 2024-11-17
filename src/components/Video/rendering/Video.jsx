import React, { useE} from "react";
import { useVideo } from "../utils/useVideo";
import { calculatePlayedPercentage } from "../utils/videoUtils";
import ProgressSlider from "./ProgressSlider/ProgressSlider";

interface VideoProps {
  url: string;
  Isscroll: boolean;
  setVideoRef: (ref: HTMLVideoElement) => void;
  muted: boolean;
}

function Video({ url, Isscroll, setVideoRef, muted, videoRef} : VideoProps) {

  const { currentTime, duration, setCurrentTime } = useVideo(videoRef);

  const onVideoPress = () => {
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  const played = calculatePlayedPercentage(currentTime, duration);

  const handleSkipTo = (e) => {
    console.log(e.target.value);
    const newTime = (e.target.value / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };


  return (
    <>
    
      {!Isscroll && <ProgressSlider played={played} handleSkipTo={handleSkipTo} /> }
      <video
        onClick={onVideoPress}
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref); 
        }}
        className="absolute top-0 w-full h-full object-cover  z-0"
        playsInline
        loop
        muted={muted}
        src={url}
      />
 
    </>
  );
}

export default Video;
