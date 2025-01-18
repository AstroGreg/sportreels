import { useRef, useState } from "react";

const useVideoRef = (
  initialVideoUrls: {
    url: string;
    title: string;
    description: string;
    thumbnails: string;
  }[]
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [videos, setVideos] = useState(initialVideoUrls);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const assignVideoRef = (index: number) => (ref: HTMLVideoElement | null) => {
    if (ref) {
      videoRefs.current[index] = ref;
    }
  };

  return { containerRef, videos, videoRefs, assignVideoRef, setVideos };
};

export { useVideoRef };
