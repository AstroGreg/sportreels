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
  setVideoRef
}) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  


  const [note, setNote] = useState({
    active: false,
    title: "title",
    description: "description",
    timestamp: "",
  });



  const handlePlayPause = () => {
    // setPlayerState({ ...playerState, playing: !playerState.playing });
  };
  const handleSkipTo = (e) => {
    const manualNumberInDecimal = parseFloat(e.target.value) / 100;
    console.log("manualNumberInDecimal", manualNumberInDecimal);
    // setPlayerState({ ...playerState, playing: false });
    videoRef.current.seekTo(manualNumberInDecimal, "fraction");
    // setPlayerState((prevPlayerState) => ({
    //   ...prevPlayerState,
    //   played: manualNumberInDecimal,
    // }));
  };



  const handlePlay = () => {
    console.log("onPlay");
    // setPlayerState({ ...playerState, playing: true });
  };

  const handlePause = () => {
    // console.log("onPause");
    // setPlayerState({ ...playerState, playing: false });
  };

  const handleMuteUnmute = () => {
    setMuted(!muted);
  };


  // const handleTakeNote = () => {
  //   console.log(
  //     "Taking note at: ",
  //     playerState.playedSeconds,
  //     title,
  //     description
  //   );
  //   handlePause();
  //   const timestamp = new Date(playerState.playedSeconds * 1000).toISOString().slice(14, 19);
  //   setNote({
  //     ...note,
  //     active: true,
  //     title,
  //     description,
  //     timestamp
  //   });
  // };
  // const handleCloseNote = () => {
  //   setNote({ ...note, active: false });
  // };

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

        {/* {note.active && <Note note={note} handleCloseNote={handleCloseNote} />}
  */}
        <video
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
 
      {/* <input
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
      /> */}
  
          <VideoFooter
            title={title}
            description={description}
          />
      

      <VideoSidebar
        muted={muted}
        handleMuteUnmute={handleMuteUnmute}
        // // playing={playing}
        // handleTakeNote={handleTakeNote}
      />
    </div>
  );
}

export default Video;

// {pauseVideo === parseInt(playerState.progress) ? (
//   <>
//     <VideoFooter
//       channel={channel}
//       description={description}
//       song={song}
//     />
//     {/**/}
//     <VideoSidebar quizOptions={quizOptions} videoRef={videoRef} />
//   </>
// ) : null}

// {!playerState.isPlaying ? (
//   <>
//     <VideoFooter channel={channel} description={description} />
//     <VideoSidebar quizOptions={quizOptions} videoRef={videoRef} />
//   </>
// ) : null}