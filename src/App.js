import React, { useEffect, useRef, useCallback, useState } from "react";
import VideoSection from "./components/Video/rendering/VideoSection";
import "./App.css";
import "./App.css";
import Nav from "./components/Video/rendering/Nav";

const videoUrls = [ { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4", title: "BK Studenten" , description:"blablla" } , { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK-2024.mov", title: "BK 2024", description:"blabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablablla"  } ]
  

function App() {

  // Update --vh custom property to the actual viewport height in pixels
  function setVhProperty() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Call the function on initial load
  setVhProperty();

  // Update the property on resize
  window.addEventListener('resize', setVhProperty);


  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);
  const [muted, setMuted] = useState(true);
  const [Isscroll, setIsScrolling] = useState(0);

  const handleMuteUnmute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  const handleScroll = useCallback(() => {
    setIsScrolling(1);
    setTimeout(() => {
      setIsScrolling(0);
    }, 1000);
  }, [])

  // Attach the scroll listener to the div
  useEffect(() => {
    videos.current.addEventListener("scroll", handleScroll);
  }, [handleScroll])


 // Dynamic viewport height update to handle mobile browser height inconsistencies
 useEffect(() => {
  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  setViewportHeight(); // Initial call
  window.addEventListener("resize", setViewportHeight); // Update on resize
  return () => window.removeEventListener("resize", setViewportHeight);
}, []);


  return (
    // BEM

    <div className="app">
      <div className="app__videos" ref={videos}>
        {videos
          .map(({url, title, description}, index) => {
            console.log(index)
            return (
                <VideoSection
                  key={index}
                  url={url}
                  title={title}
                  description={description}
                  index={index}
                  setVideoRef={handleVideoRef(index)}
                  handleMuteUnmute={handleMuteUnmute}
                  muted={muted}
                  Isscroll={Isscroll}
                />

            );
          })}
       
      </div>

    </div>
  );
}

export default App;
