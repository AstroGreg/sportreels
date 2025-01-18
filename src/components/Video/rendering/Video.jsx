import React, { useRef, useState } from "react";
import { useVideo } from "../utils/useVideo";
import ProgressSlider from "./ProgressSlider/ProgressSlider";
import Thumbnail from "./Thumbnail";

interface VideoProps {
  url: string;
  Isscroll: boolean;
  setVideoRef: (ref: HTMLVideoElement) => void;
  thumbnails: { [key: number]: string };
  muted: boolean;
}

function Video({ url, Isscroll, setVideoRef, muted, thumbnails }: VideoProps) {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { played, handleSkipTo, onVideoPress } = useVideo(videoRef);

  return (
    <div className="relative w-full h-full">
      {/* 1) Optional progress bar */}
      {!Isscroll && (
        <ProgressSlider played={played} handleSkipTo={handleSkipTo} />
      )}
      { !isLoaded && <Thumbnail thumbnails={thumbnails}/> }
 
      {/* 3) Video Element */}
      <video
        ref={(ref) => {
          videoRef.current = ref;
          if (ref) setVideoRef(ref);
        }}
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        src={url}
        playsInline
        loop
        muted={muted}
        onClick={onVideoPress}
        onCanPlayThrough={() => setIsLoaded(true)}
      />
    </div>
  );
}

export default Video;
