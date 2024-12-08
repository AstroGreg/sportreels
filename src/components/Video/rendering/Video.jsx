import React, { useRef } from "react";
import { useVideo } from "../utils/useVideo";
import ProgressSlider from "./ProgressSlider/ProgressSlider";

interface VideoProps {
  url: string;
  Isscroll: boolean;
  setVideoRef: (ref: HTMLVideoElement) => void;
  muted: boolean;
}

function Video({ url, Isscroll, setVideoRef, muted} : VideoProps) {

  const videoRef = useRef(null);
  const {played, handleSkipTo, onVideoPress} = useVideo(videoRef);

  return (
    <>
      {!Isscroll && <ProgressSlider played={played} handleSkipTo={handleSkipTo} /> }
      <video
        onClick={onVideoPress}
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref); 
        }}
        className="absolute top-0 z-0 object-cover w-full h-full"
        playsInline
        loop
        muted={muted}
        src={url}
      />
 
    </>
  );
}

export default Video;
