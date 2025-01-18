import { useState, useEffect, RefObject } from "react";
import { Capacitor } from "@capacitor/core";

const useMute = (videoRef: RefObject<HTMLVideoElement>) => {
  // Determine if we are on a native (iOS/Android) platform or Web
  const isNative = Capacitor.isNativePlatform();

  // If on native (phone), we want to play with sound --> isMuted = false
  // If on web, we default to muted --> isMuted = true
  const [isMuted, setIsMuted] = useState<boolean>(() => !isNative);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Keep the <video> element’s muted property in sync whenever isMuted changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, videoRef]);

  return { isMuted, toggleMute };
};

export { useMute };
