import React, { useEffect, useRef, useCallback, useState } from "react";
import VideoSection from "./VideoSection";
import "../../../App.css";

interface VideoContainerProps {
  videoUrls: { url: string; title: string; description: string }[];
  handleBackToMenu: () => void;
}

function VideoContainer({ videoUrls, handleBackToMenu }: VideoContainerProps) {
  // Set up a ref for the scrollable container
  const containerRef = useRef(null);

  // Update --vh custom property to the actual viewport height in pixels
  function setVhProperty() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setVhProperty();
    window.addEventListener("resize", setVhProperty);
    return () => {
      window.removeEventListener("resize", setVhProperty);
    };
  }, []);

  const [videos, setVideos] = useState(videoUrls);
  const videoRefs = useRef([]);
  const [muted, setMuted] = useState(true);
  const [isScrolling, setIsScrolling] = useState(0);

  const handleMuteUnmute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target
          videoElement.play();
        } else {
          const videoElement = entry.target
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    videoRefs.current.forEach((videoRef) => {
      if (videoRef) observer.observe(videoRef);
    });

    return () => {
      observer.disconnect();
    };
  }, [videos]);

  const handleVideoRef = (index: number) => (ref: HTMLVideoElement) => {
    videoRefs.current[index] = ref;
  };

  const handleScroll = useCallback(() => {
    setIsScrolling(1);
    setTimeout(() => {
      setIsScrolling(0);
    }, 1000);
  }, []);

  // Attach the scroll listener to the scrollable container
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div className="app__videos" ref={containerRef}>
      {videos.map(({ url, title, description }, index) => (
        <VideoSection
          key={index}
          url={url}
          title={title}
          description={description}
          index={index}
          setVideoRef={handleVideoRef(index)}
          handleMuteUnmute={handleMuteUnmute}
          handleBackToMenu={handleBackToMenu}
          muted={muted}
          Isscroll={isScrolling}
        />
      ))}
    </div>
  );
}

export default VideoContainer;
