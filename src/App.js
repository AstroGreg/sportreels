import React, { useEffect, useRef, useState } from "react";
import Video from "./components/Video/Video";
import "./App.css";
import "./App.css";
import Footer from "./components/BottomNav/Footer";
import Header from "./components/Header/Header";
import Sandbox from "./sandbox/index"


const videoUrls = [ { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4", title: "BK Studenten" , description:"blablla" } , { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK-2024.mov", title: "BK 2024", description:"blablla"  } ]
  

function App() {

  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

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

  return (
    // BEM

    <div className="app">
      <Header />
      <div className="app__videos">
        {videos
          .map(({url, title, description}, index) => {
            console.log(index)
            return (
                <Video
                  key={index}
                  url={url}
                  title={title}
                  description={description}
                  index={index}
                  setVideoRef={handleVideoRef(index)}
                  
                />

            );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
