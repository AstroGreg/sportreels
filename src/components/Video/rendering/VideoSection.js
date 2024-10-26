import React, { useEffect, useRef, useState } from "react";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";
import Note from "./Note/Note";
import "../styling/video.css";
import Video from "./Video";

function VideoSection({
  url,
  description,
  title,
  index,
  setVideoRef,
  handleMuteUnmute,
  muted,
}) {
  const videoRef = useRef(null);

  const [note, setNote] = useState({
    active: false,
    title: "title",
    description: "description",
    timestamp: "",
  });

  const handleTakeNote = () => {
   
    videoRef.current.pause();
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
    videoRef.current.play();
  };


  return (
    <div className="video">
      {note.active && <Note note={note} handleCloseNote={handleCloseNote} />}
      <Video url={url} index={index} setVideoRef={setVideoRef} muted={muted} />
      <VideoFooter title={title} description={description}/>
      <VideoSidebar muted={muted} handleMuteUnmute={handleMuteUnmute} handleTakeNote={handleTakeNote}/>
    </div>
  );
}

export default VideoSection;