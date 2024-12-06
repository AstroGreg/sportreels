import React,  {useState, useRef, useEffect} from "react";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";
import Results from "./Results/results";
import ReportModal from "./Report/ReportModel";
import BackIcon from "./BackIcon";
import Video from "./Video";

interface VideoSectionProps {
  url: string;
  description: string;
  title: string;
  Isscroll: boolean;
  index: number;
  setVideoRef: (ref: HTMLVideoElement) => void;
  handleMuteUnmute: () => void;
  handleBackToMenu: () => void;
  muted: boolean;
  resultsDisplayed: boolean;
  setResultsDisplayed: (value: boolean) => void;
}

function VideoSection({
  url,
  description,
  title,
  Isscroll,
  index,
  setVideoRef,
  handleMuteUnmute,
  handleBackToMenu,
  muted,
  resultsDisplayed,
  setResultsDisplayed,
} : VideoSectionProps) {

  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openReportModal = () => {
    setIsModalOpen(true);
  };

  const closeReportModal = () => {
    setIsModalOpen(false);
  };

  const handleReportSubmit = (reportData) => {
    // Handle the report submission (send to server, log, etc.)
    console.log("Report Submitted: ", reportData);
  };

  const [showResulsWindow, setshowResulsWindow] = useState({
    active: false,
    title: "title",
    description: "description",
    timestamp: "",
  });

  const handleShowResults = () => {
    setResultsDisplayed(true);
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
    setResultsDisplayed(false);
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
     {showResulsWindow.active && <Results
        eventName="800m"
        videoTitle="Belgian Championships 2024"
        results={results}
        handleCloseResults={handleCloseResults}
      /> }
       {isModalOpen && (
        <ReportModal
          onClose={closeReportModal}
          onSubmit={handleReportSubmit}
        />
      )}

    <div className={`relative w-full h-full snap-start ${resultsDisplayed && "hidden"}` }>
    { handleBackToMenu && <BackIcon onBack={handleBackToMenu} />}
  
    <Video url={url} Isscroll={Isscroll} index={index} setVideoRef={setVideoRef} muted={muted} videoRef={videoRef}/> 
      <VideoFooter title={title} description={description} handleShowResults={handleShowResults} />
      <VideoSidebar
        muted={muted}
        handleMuteUnmute={handleMuteUnmute}
        openReportModal={openReportModal} 
      />
    </div>
    </>
  );
}

export default VideoSection;
