import React from "react";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";
import Nav from "./VideoFooter/Nav";
import BackToMenu from "./BackToMenu";
import Video from "./Video";

interface VideoSectionProps {
  url: string;
  description: string;
  title: string;
  Isscroll: boolean;
  index: number;
  setVideoRef: (ref: HTMLVideoElement) => void;
  handleMuteUnmute: () => void;
  muted: boolean;
}

function VideoSection({
  url,
  description,
  title,
  Isscroll,
  index,
  setVideoRef,
  handleMuteUnmute,
  muted,
} : VideoSectionProps) {

  return (
    <>
    <div className="relative w-full h-[90%] snap-start">
     
      <BackToMenu onBack={() => console.log("back")} Isscroll={Isscroll} />
      <Video url={url} Isscroll={Isscroll} index={index} setVideoRef={setVideoRef} muted={muted} />
      <VideoFooter title={title} description={description} />
      <VideoSidebar
        muted={muted}
        handleMuteUnmute={handleMuteUnmute}
      />
    </div>
    <div className="h-[10%]">
       <Nav />
    </div>
    </>
  );
}

export default VideoSection;
