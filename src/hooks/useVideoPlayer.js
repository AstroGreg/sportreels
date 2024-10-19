// @src/hooks/useVideoPlayer.js

import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: true,
    isQuizDisplayed: false,
  });

    useEffect(() => {
      console.log("LATEST UPDATE", playerState);
    }, [playerState]);

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

  const handleSetPlaybackRate = (e) => {
    setPlayerState({
      ...playerState,
      playbackRate: parseFloat(e.target.value),
    });
  };

  const handleOnPlaybackRateChange = (speed) => {
    setPlayerState({ ...playerState, playbackRate: parseFloat(speed) });
  };

  const handlePlay = () => {
    console.log("onPlay");
    setPlayerState({ ...playerState, playing: true });
  };

  const handlePause = () => {
    console.log("onPause");
    setPlayerState({ ...playerState, playing: false });
  };

  const handleSeekChange = (e) => {
    const manualNumberInDecimal = parseFloat(e.target.value) / 100;
    // console.log("manualNumberInDecimal", manualNumberInDecimal);
    videoElement.current.seekTo(manualNumberInDecimal);
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      played: manualNumberInDecimal,
    }));
  };

  const handleProgress = (state, quizDisplayTimeInt) => {
    console.log("onProgress", state);

    if (quizDisplayTimeInt === parseInt(state.playedSeconds)) {
      handlePause();
      setPlayerState((prevPlayerState) => ({
        ...prevPlayerState,
        isQuizDisplayed: true,
      }));
    } else {
      setPlayerState((prevPlayerState) => ({ ...prevPlayerState, ...state }));
    }
  };

  const handleEnded = () => {
    console.log("onEnded");
    setPlayerState({ ...playerState, playing: playerState.loop });
  };

  const handleDuration = (duration) => {
    console.log("onDuration", duration);
    setPlayerState({ ...playerState, duration });
  };

  return {
    playerState,
    load,
    handlePlayPause,
    handleStop,
    handleVolumeChange,
    handleToggleMuted,
    handleSetPlaybackRate,
    handleOnPlaybackRateChange,
    handlePlay,
    handlePause,
    handleSeekChange,
    handleProgress,
    handleEnded,
    handleDuration,
  };
};

export default useVideoPlayer;
