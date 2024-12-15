import React from "react";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";
import { useShowResults }  from "../utils/useShowResults";
import { useReportModal } from "../utils/useReportModal"
import { AthleticsResults } from "../../Competition/Results";
import ReportModal from "./Report/ReportModel";
import BackIcon from "../../Nav/BackIcon";
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
  resultsDisplayed: Boolean;
  setResultsDisplayed: (state:Boolean) => void;
  muted: boolean;
}

const initialResults = [
  { position: 1, name: "Greg Wenshell", club: "ADD", result: "1:49.99", isPB: true, isSB: false },
  { position: 2, name: "Jane Smith", club: "Speedsters Athletics", result: "1:52.10", isPB: false, isSB: true },
  { position: 3, name: "Samuel Lee", club: "Elite Runners", result: "1:54.35", isPB: false, isSB: false },
  { position: 4, name: "John Doe", club: "Speedsters Athletics", result: "1:55.10", isPB: false, isSB: false },
  { position: 5, name: "Jan Pan", club: "Speedsters Athletics", result: "1:56.10", isPB: false, isSB: false },
  { position: 6, name: "Steven Fields", club: "Speedsters Athletics", result: "1:57.10", isPB: false, isSB: false },
  { position: 7, name: "Kevin Love", club: "Speedsters Athletics", result: "1:58.10", isPB: false, isSB: false },
  { position: 8, name: "Jason Smith", club: "Speedsters Athletics", result: "1:59.10", isPB: false, isSB: false },
  { position: 9, name: "Harry Christopher", club: "Speedsters Athletics", result: "2:00.10", isPB: false, isSB: false },
  { position: 10, name: "Ward Bellemans", club: "Speedsters Athletics", result: "2:01.10", isPB: false, isSB: false },
];

function VideoSection({
  url,
  description,
  title,
  Isscroll,
  index,
  setVideoRef,
  handleMuteUnmute,
  handleBackToMenu,
  resultsDisplayed,
  setResultsDisplayed, 
  muted,
} : VideoSectionProps) {
  
  const { resultsWindow, showResults, closeResults, results} = useShowResults(initialResults, "Race Title", "Race Description", setResultsDisplayed);
  const { isModalOpen, openReportModal, closeReportModal, handleReportSubmit } = useReportModal();

  return (
    <>
     {resultsWindow.active && <AthleticsResults
        eventName="800m"
        videoTitle="Belgian Championships 2024"
        results={results}
        handleCloseResults={closeResults}
      /> }
       {isModalOpen && (
        <ReportModal
          onClose={closeReportModal}
          onSubmit={handleReportSubmit}
        />
      )}

    <div className={`relative w-full h-full snap-start ${resultsDisplayed && "hidden"}` }>
    { handleBackToMenu && <BackIcon onBack={handleBackToMenu} />}
  
    <Video url={url} Isscroll={Isscroll} index={index} setVideoRef={setVideoRef} muted={muted}/> 
      <VideoFooter title={title} description={description} handleShowResults={showResults} />
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
