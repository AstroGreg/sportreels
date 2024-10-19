import React, { createContext, useState, useEffect } from "react";

export const QuizReelContext = createContext({});

export const QuizReelContextProvider = (props) => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    volume: 0.01,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: true,
    isQuizDisplayed: false,
    videoElement: null,
    seeking: false,
  });
  const [seeking, setSeeking] = useState(false);

  useEffect(() => {
    console.log("LATEST UPDATE", seeking);
  }, [seeking]);

  const setVideoElement = (videoElement) => {
    setPlayerState({ ...playerState, videoElement });
  };

  const load = (url) => {
    setPlayerState({
      ...playerState,
      url,
      played: 0,
      loaded: 0,
    });
  };

  const handlePlayPause = () => {
    setPlayerState({ ...playerState, playing: !playerState.playing });
  };

  const handleStop = () => {
    setPlayerState({ ...playerState, url: null, playing: false });
  };

  const handleVolumeChange = (e) => {
    setPlayerState({ ...playerState, volume: parseFloat(e.target.value) });
  };

  const handleToggleMuted = () => {
    setPlayerState({ ...playerState, muted: !playerState.muted });
  };

  // const handleSetPlaybackRate = (e) => {
  //   setPlayerState({
  //     ...playerState,
  //     playbackRate: parseFloat(e.target.value),
  //   });
  // };

  // const handleOnPlaybackRateChange = (speed) => {
  //   setPlayerState({ ...playerState, playbackRate: parseFloat(speed) });
  // };

  const handlePlay = () => {
    // console.log("onPlay");
    setPlayerState({ ...playerState, playing: true });
  };

  const handlePause = () => {
    // console.log("onPause");
    setPlayerState({ ...playerState, playing: false });
  };

  const handleSkipTo = (e) => {
    console.log("A");
    setSeeking(true);
    console.log("B");
    const manualNumberInDecimal = parseFloat(e.target.value) / 100;
    console.log("manualNumberInDecimal", manualNumberInDecimal, seeking);
    if (seeking)
      playerState.videoElement.current.seekTo(
        manualNumberInDecimal,
        "fraction"
      );
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      played: manualNumberInDecimal,
      playedSeconds: 8,
    }));
    setSeeking(false);
  };

  const handleSeekChange = (e) => {
    e.preventDefault();

    const manualNumberInDecimal = parseFloat(e.target.value) / 100;
    console.log("manualNumberInDecimal", manualNumberInDecimal, seeking);

    // if (seeking)
    playerState.videoElement.current.seekTo(manualNumberInDecimal, "fraction");
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      played: manualNumberInDecimal,
      // playedSeconds: 8,
    }));
    setSeeking(false);
  };

  const handleProgress = (state, quizDisplayTimeInt) => {
    // console.log("onProgress", state);

    if (!seeking)
      setPlayerState((prevPlayerState) => ({ ...prevPlayerState, ...state }));
    // if (quizDisplayTimeInt === parseInt(state.playedSeconds)) {
    //   handlePause();
    //   setPlayerState((prevPlayerState) => ({
    //     ...prevPlayerState,
    //     isQuizDisplayed: true,
    //   }));
    // } else {

    // }
  };

  const handleEnded = () => {
    // console.log("onEnded");
    setPlayerState({ ...playerState, playing: playerState.loop });
  };

  const handleDuration = (duration) => {
    // console.log("onDuration", duration);
    setPlayerState({ ...playerState, duration });
  };

  return (
    <QuizReelContext.Provider
      value={{
        playerState,
        load,
        handlePlayPause,
        handleStop,
        handleVolumeChange,
        handleToggleMuted,
        // handleSetPlaybackRate,
        // handleOnPlaybackRateChange,
        handlePlay,
        handlePause,
        handleSeekChange,
        handleSkipTo,
        handleProgress,
        handleEnded,
        handleDuration,
        setVideoElement,
      }}
    >
      {props.children}
    </QuizReelContext.Provider>
  );
};
