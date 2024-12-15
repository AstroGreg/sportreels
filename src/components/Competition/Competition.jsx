import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import VideoContainer from "../Video/rendering/VideoContainer";
import { EventItem } from "./Event";
import { SectionHeader } from "./SectionHeader";
import { EventHeader } from "./EventHeader";

interface CompetitionProps {
  competitionName: string;
  onSelectEvent: (videoUrl: string, title: string) => void;
  onBack: () => void;
}

const loopEvents = [
  {
    name: "60 meter",
    events: [
      { time: "17:45", count: 15, category: "MIN-M", round: "Series", video: "dummy-video1.mp4" },
      { time: "17:55", count: 12, category: "MIN-V", round: "Series", video: "dummy-video2.mp4" },
      { time: "18:05", count: 9, category: "PUP-M", round: "Series", video: "dummy-video3.mp4" },
      { time: "18:15", count: 6, category: "PUP-V", round: "Series", video: "dummy-video4.mp4" },
    ]
  },
  {
    name: "60 meter horden",
    events: [
      { time: "18:25", count: 23, category: "CAD-V", round: "Series", video: "dummy-video1.mp4" },
      { time: "18:35", count: 16, category: "SCH-M", round: "Series", video: "dummy-video2.mp4" }
    ]
  }
];

const veldEvents = [
  {
    name: "Hoogspringen",
    events: [
      { time: "16:30", count: 8, category: "PUP-V", round: "", video: "dummy-video3.mp4" },
      { time: "18:00", count: 15, category: "PUP-M", round: "", video: "dummy-video4.mp4" },
      { time: "19:15", count: 15, category: "SCH-V", round: "", video: "dummy-video1.mp4" },
      { time: "20:45", count: 15, category: "SCH-M", round: "", video: "dummy-video2.mp4" }
    ]
  }
];

const Competition: React.FC<CompetitionProps> = ({
  competitionName,
  onSelectEvent,
  onBack
}) => {
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loopOpen, setLoopOpen] = useState(false);
  const [veldOpen, setVeldOpen] = useState(false);


  const watchVideoClick = () => {
    const videoProps = { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4", title: "BK Studenten", description: "blablla" };
    setSelectedVideo(videoProps);
  };

  const handleBackToMenu = () => {
    setSelectedVideo(null);
  };

  if (selectedVideo) {
    return (
      <VideoContainer videoUrls={[selectedVideo]} handleBackToMenu={handleBackToMenu} />
    );
  }

  return (
    <div className="p-4 bg-gray-100 ">
      <button onClick={onBack} className="inline-flex items-center mb-6 font-medium text-blue-500 transition-colors hover:text-blue-600">
        &larr; Back to Search
      </button>
      <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-sm">
        <h2 className="mb-2 text-3xl font-bold text-gray-900">{competitionName}</h2>
        <p className="mb-6 text-gray-700">Available videos</p>

        {/* Loop onderdelen */}
        <SectionHeader
          title="Loop onderdelen"
          isOpen={loopOpen}
          toggle={() => setLoopOpen(!loopOpen)}
        />
        {loopOpen && (
          <div className="mt-2">
            {loopEvents.map((onderdeel, idx) => (
              <div key={idx} className="p-4 mt-3 bg-white rounded-lg shadow-sm">
                <EventHeader name={onderdeel.name} />
                <div className="mt-2 ml-2">
                  {onderdeel.events.map((ev, i) => (
                    <EventItem
                      key={i}
                      time={ev.time}
                      count={ev.count}
                      category={ev.category}
                      round={ev.round}
                      videoUrl={ev.video}
                      onderdeelName={onderdeel.name}
                      watchVideoClick={watchVideoClick}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Veld onderdelen */}
        <div className="mt-6">
          <SectionHeader
            title="Veld onderdelen"
            isOpen={veldOpen}
            toggle={() => setVeldOpen(!veldOpen)}
          />
          {veldOpen && (
            <div className="mt-2">
              {veldEvents.map((onderdeel, idx) => (
                <div key={idx} className="p-4 mt-3 bg-white rounded-lg shadow-sm">
                  <EventHeader name={onderdeel.name} />
                  <div className="mt-2 ml-2">
                    {onderdeel.events.map((ev, i) => (
                      <EventItem
                        key={i}
                        time={ev.time}
                        count={ev.count}
                        category={ev.category}
                        round={ev.round}
                        videoUrl={ev.video}
                        onderdeelName={onderdeel.name}
                        watchVideoClick={watchVideoClick}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Competition };
