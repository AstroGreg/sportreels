import React, { useEffect, useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
// import useVideoPlayer from "../../hooks/useVideoPlayer";
import ReactPlayer from "react-player";
import Note from "../Note/Note";
// import QuizOptions from "../QuizOptions/QuizOptions";
// import { QuizReelContext } from "../../contexts/QuizReelContext";

import "./Video.css";

function Video({
  url,
  description,
  title,
  index,
  setVideoRef,
  handleMuteUnmute,
  muted,
}) {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSkipTo = (e) => {
    const newTime = (e.target.value / 100) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('timeupdate', handleTimeUpdate);
    }
    return () => {
      if (video) {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  const played = duration ? currentTime / duration : 0;



  const [note, setNote] = useState({
    active: false,
    title: "title",
    description: "description",
    timestamp: "",
  });



  const handlePlayPause = () => {
    // setPlayerState({ ...playerState, playing: !playerState.playing });
  };



  const handlePlay = () => {
    console.log("onPlay");
    // setPlayerState({ ...playerState, playing: true });
  };

  const handlePause = () => {
    // console.log("onPause");
    // setPlayerState({ ...playerState, playing: false });
  };



  const handleTakeNote = () => {
   
    handlePause();
    const timestamp = new Date(100 * 1000).toISOString().slice(14, 19);
    setNote({
      ...note,
      active: true,
      title,
      description,
      timestamp
    });
  };
  const handleCloseNote = () => {
    setNote({ ...note, active: false });
  };

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // const { playing, volume, muted, loop, played, playbackRate } = playerState;

  return (
    <div className="video">

        {note.active && <Note note={note} handleCloseNote={handleCloseNote} />}
 
        <video
        index={index}
        className="player"
        onClick={onVideoPress}
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref);
        }}
        width={"100%"}
        height={"100%"}
        playsInline={true}
        loop
        muted={muted}
        src={url}
      ></video> 
 
       <input
        className="videofooter"
        type="range"
        style={{ backgroundSize: `${played * 100}%` }}
        min="0"
        max="100"
        step="any"
        value={played * 100}
        onChange={(e) => {
          handleSkipTo(e);
        }}
      /> 
  
          <VideoFooter
            title={title}
            description={description}
          />
      
      <VideoSidebar
        muted={muted}
        handleMuteUnmute={handleMuteUnmute}
        // // playing={playing}
        handleTakeNote={handleTakeNote}
      />
    </div>
  );
}

export default Video;