import { useCallback, useEffect, useState } from "react";

export function useVideo(videoRef) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playedPercentage, setPlayedPercentage] = useState(0);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, [videoRef]);

  const handleTimeUpdate = useCallback(() => {
   
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      setCurrentTime(current);
      setPlayedPercentage((current / videoRef.current.duration) * 100);
    }
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);
    }
    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [handleLoadedMetadata, handleTimeUpdate, videoRef]);

  return { currentTime, duration, playedPercentage, setCurrentTime };
}
