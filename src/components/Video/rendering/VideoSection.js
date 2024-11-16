import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";
import Nav from "./Nav";
import Note from "./Note/Note";
import BackToMenu from "./BackToMenu";
import Video from "./Video";

function VideoSection({
  url,
  description,
  title,
  Isscroll,
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
    const timestamp = new Date(100 * 1000).toISOString().slice(14, 19);
    setNote({
      ...note,
      active: true,
      title,
      description,
      timestamp
    });
  };

  const handleCloseNote = () => setNote({ ...note, active: false });

  return (
    <>
    <div className="relative w-full h-[90%] snap-start">
     
      {note.active && <Note note={note} handleCloseNote={handleCloseNote} />}
      <BackToMenu onBack={() => console.log("back")} Isscroll={Isscroll} />
      <Video url={url} Isscroll={Isscroll} index={index} setVideoRef={setVideoRef} muted={muted} />

      <VideoFooter title={title} description={description} />
      <VideoSidebar
        muted={muted}
        handleMuteUnmute={handleMuteUnmute}
        handleTakeNote={handleTakeNote}
      />
    </div>
    <div className="h-[10%]">
       <Nav />
    </div>
    </>
  );
}

export default VideoSection;
