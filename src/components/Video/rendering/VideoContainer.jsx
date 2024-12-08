import React, { useState } from "react";
import VideoSection from "./VideoSection";
import { useMute } from "../utils/useMute";
import { useVideoPlaybackOnScroll } from "../utils/useVideoPlaybackOnScroll";
import { useScrollDetection } from "../utils/useScrollDetection";
import { useVideoRef } from "../utils/useVideoRef";

import "../../../App.css";

interface VideoContainerProps {
  videoUrls: { url: string; title: string; description: string }[];
  handleBackToMenu: () => void;
}

function VideoContainer({ videoUrls, handleBackToMenu }: VideoContainerProps) {

  const [resultsDisplayed, setResultsDisplayed] = useState(false);
  
  const { containerRef, videos, videoRefs, assignVideoRef } = useVideoRef(videoUrls);
  const { isMuted, toggleMute } = useMute( videoRefs);
  const isScrolling = useScrollDetection(containerRef);
  useVideoPlaybackOnScroll(videoRefs)

  return (
    <div className={`${!resultsDisplayed && "app__videos"}`}ref={containerRef}>
      {videos.map(({ url, title, description }, index) => (
        <VideoSection
          key={index}
          url={url}
          title={title}
          description={description}
          index={index}
          setVideoRef={assignVideoRef(index)}
          handleMuteUnmute={toggleMute}
          handleBackToMenu={handleBackToMenu}
          muted={isMuted}
          Isscroll={isScrolling}
          resultsDisplayed={resultsDisplayed}
          setResultsDisplayed={setResultsDisplayed}
        />
      ))}
    </div>
  );
}

export default VideoContainer;
