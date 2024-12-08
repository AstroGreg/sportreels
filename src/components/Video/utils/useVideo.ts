import { useCallback, useEffect, useState, MutableRefObject } from "react";

export function useVideo(videoRef: MutableRefObject<HTMLVideoElement | null>) {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, [videoRef]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      setCurrentTime(current);
      setPlayed((current / videoRef.current.duration) * 100);
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

  const onVideoPress = () => {
    if (videoRef.current) {
      videoRef.current.paused
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  };

  const handleSkipTo = (e: any) => {
    const newTime = (e.target.value / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return {
    currentTime,
    duration,
    played,
    setCurrentTime,
    onVideoPress,
    handleSkipTo,
  };
}
