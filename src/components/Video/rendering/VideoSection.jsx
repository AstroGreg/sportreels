import React,  {useState, useRef, useEffect} from "react";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";
import Nav from "./VideoFooter/Nav";
import AthleticsResults from "./Results/results";
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

  const videoRef = useRef(null);
  
  const [showResulsWindow, setshowResulsWindow] = useState({
    active: false,
    title: "title",
    description: "description",
    timestamp: "",
  });

  const handleShowResults = () => {
    const timestamp = new Date(100 * 1000).toISOString().slice(14, 19);
    setshowResulsWindow({
      ...results,
      active: true,
      title,
      description,
      timestamp
    });
  };

  const handleCloseResults = () => {
    setshowResulsWindow({ ...showResulsWindow, active: false }); 
  };
  const results = [
    {
      position: 1,
      name: "Greg Wenshell",
      club: "ADD",
      result: "1:49.99",
      isPB: true,
      isSB: false,
    },
    {
      position: 2,
      name: "Jane Smith",
      club: "Speedsters Athletics",
      result: "1:52.10",
      isPB: false,
      isSB: true,
    },
    {
      position: 3,
      name: "Samuel Lee",
      club: "Elite Runners",
      result: "1:54.35",
      isPB: false,
      isSB: false,
    },

    {
      position: 4,
      name : "John Doe",
      club : "Speedsters Athletics",
      result : "1:55.10",
      isPB : false,
      isSB : false,
    },

    {
      position: 5,
      name : "Jan Pan",
      club : "Speedsters Athletics",
      result : "1:56.10",
      isPB : false,
      isSB : false,
    },

    {
      position: 6,
      name : "Steven fields",
      club : "Speedsters Athletics",
      result : "1:57.10",
      isPB : false,
      isSB : false,
    },

    {
      position: 7,
      name : "Kevin Love",
      club : "Speedsters Athletics",
      result : "1:58.10",
      isPB : false,
      isSB : false,
    },

    {
      position: 8,
      name : "Jason smith",
      club : "Speedsters Athletics",
      result : "1:59.10",
      isPB : false,
      isSB : false,
    },

    {
      position: 9,
      name : "Harry chrisopher",
      club : "Speedsters Athletics",
      result : "2:00.10",
      isPB : false,
      isSB : false,
    },

    {
      position: 10,
      name : "Ward Bellemans",
      club : "Speedsters Athletics",
      result : "2:01.10",
      isPB : false,
      isSB :
      false,  
    },

  ];

  return (
    <>
     {showResulsWindow.active && <AthleticsResults
        eventName="800m"
        videoTitle="Belgian Championships 2024"
        results={results}
        handleCloseResults={handleCloseResults}
      /> }
  
    <div className={`relative w-full h-[90%] snap-start ${
      showResulsWindow.active ? "hidden absolute" : ""
    }`}>
    <BackToMenu onBack={() => console.log("back")} Isscroll={Isscroll} />
  
    <Video url={url} Isscroll={Isscroll} index={index} setVideoRef={setVideoRef} muted={muted} videoRef={videoRef}/> 
      <VideoFooter title={title} description={description} handleShowResults={handleShowResults} />
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
