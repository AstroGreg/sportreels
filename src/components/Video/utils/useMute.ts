import { useState } from "react";
const useMute = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted || false);
  };
  return { isMuted, toggleMute };
};

export { useMute };
