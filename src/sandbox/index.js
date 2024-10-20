import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoScroll = () => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 } // Adjust this value to your needs
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  return (
    <div>
      <div style={{ height: '100vh', background: '#ccc' }}>
        <h1>Scroll down to watch the video</h1>
      </div>
      <div ref={videoRef} style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReactPlayer
          ref={playerRef}
          url="https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4"
          playing={isPlaying}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      <div style={{ height: '100vh', background: '#eee' }}>
        <h1>More content below</h1>
      </div>
    </div>
  );
};

export default VideoScroll;
