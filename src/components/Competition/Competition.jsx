import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import VideoContainer from "../Video/rendering/VideoContainer";
import { EventItem } from "./Event";
// Removed SectionHeader and EventHeader for simpler styling

interface CompetitionProps {
  competitionName: string;
  onSelectEvent: (videoUrl: string, title: string) => void;
  onBack: () => void;
}

const loopEvents = [
  {
    name: "60 meter",
    events: [
      {
        time: "17:45",
        count: 15,
        category: "MIN-M",
        round: "Series",
        video: "dummy-video3.mp4"
      },
      {
        time: "17:55",
        count: 12,
        category: "MIN-V",
        round: "Series",
        video: "dummy-video4.mp4"
      }
    ]
  },
  {
    name: "200 meter",
    events: [
      {
        time: "19:00",
        count: 12,
        category: "SCH-V",
        round: "Series",
        video: "dummy-video9.mp4"
      },
      {
        time: "19:10",
        count: 10,
        category: "SCH-M",
        round: "Series",
        video: "dummy-video10.mp4"
      }
    ]
  },
  {
    name: "400 meter",
    events: [
      {
        time: "19:20",
        count: 8,
        category: "SCH-V",
        round: "Series",
        video: "dummy-video11.mp4"
      }
    ]
  },
  {
    name: "800 meter",
    events: [
      {
        time: "19:30",
        count: 20,
        category: "SCH-V",
        round: "Final",
        video: "dummy-video12.mp4"
      }
    ]
  },
  {
    name: "1500 meter",
    events: [
      {
        time: "19:45",
        count: 18,
        category: "SCH-M",
        round: "Final",
        video: "dummy-video13.mp4"
      }
    ]
  },
  {
    name: "60 meter horden",
    events: [
      {
        time: "20:00",
        count: 12,
        category: "SCH-V",
        round: "Final",
        video: "dummy-video14.mp4"
      }
    ]
  }
];

const veldEvents = [
  {
    name: "Kogelstoten",
    events: [
      {
        time: "16:30",
        count: 8,
        category: "PUP-V",
        round: "",
        video: "dummy-video15.mp4"
      }
    ]
  },
  {
    name: "Hoogspringen",
    events: [
      {
        time: "18:00",
        count: 15,
        category: "PUP-M",
        round: "",
        video: "dummy-video16.mp4"
      }
    ]
  },
  {
    name: "Hink-stapspringen",
    events: [
      {
        time: "19:15",
        count: 15,
        category: "SCH-V",
        round: "",
        video: "dummy-video17.mp4"
      }
    ]
  },
  {
    name: "Polsstokhoogspringen",
    events: [
      {
        time: "20:45",
        count: 15,
        category: "SCH-M",
        round: "",
        video: "dummy-video18.mp4"
      }
    ]
  },
  {
    name: "Verspringen",
    events: [
      {
        time: "21:00",
        count: 12,
        category: "MIN-M",
        round: "",
        video: "dummy-video19.mp4"
      },       {
        time: "21:00",
        count: 12,
        category: "MIN-M",
        round: "",
        video: "dummy-video19.mp4"
      }
    ]
  }
];

const Competition: React.FC<CompetitionProps> = ({
  competitionName,
  onSelectEvent,
  onBack
}) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // If you still want sub-events collapsible, track the open index:
  const [openLoopIndex, setOpenLoopIndex] = useState(null);
  const [openVeldIndex, setOpenVeldIndex] = useState(null);

  const watchVideoClick = () => {
    // Example video
    const videoProps = {
      url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
      title: "BK Studenten",
      description: "blablla"
    };
    setSelectedVideo(videoProps);
  };

  const handleBackToMenu = () => {
    setSelectedVideo(null);
  };

  if (selectedVideo) {
    return (
      <VideoContainer
        videoUrls={[selectedVideo]}
        handleBackToMenu={handleBackToMenu}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center m-3 font-medium text-blue-500 transition-colors hover:text-blue-600"
      >
        &larr; Back to Search
      </button>

      <div className="max-w-2xl mx-auto bg-white">
    
        {/* Loop onderdelen - no big card, just a heading & list */}
        <div className="border-t border-gray-200">
          <h3 className="px-4 py-3 text-lg font-semibold text-gray-900 bg-gray-100">
            Loop onderdelen
          </h3>
          {loopEvents.map((onderdeel, idx) => (
            <div key={idx} className="border-b border-gray-200">
              {/* Row with the event name */}
              <button
                className="flex items-center justify-between w-full px-4 py-3 focus:outline-none"
                onClick={() =>
                  setOpenLoopIndex(openLoopIndex === idx ? null : idx)
                }
              >
                <span className="text-gray-900">{onderdeel.name}</span>
                {openLoopIndex === idx ? (
                  <FiChevronUp className="text-gray-600" />
                ) : (
                  <FiChevronDown className="text-gray-600" />
                )}
              </button>

              {/* Sub-events */}
              {openLoopIndex === idx && (
                <div className="px-5 py-2 bg-gray-50">
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
              )}
            </div>
          ))}
        </div>

        {/* Veld onderdelen - similar styling */}
        <div className="border-gray-200 ">
          <h3 className="px-4 py-3 text-lg font-semibold text-gray-900 bg-gray-100">
            Veld onderdelen
          </h3>
          {veldEvents.map((onderdeel, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                className="flex items-center justify-between w-full px-4 py-3 focus:outline-none"
                onClick={() =>
                  setOpenVeldIndex(openVeldIndex === idx ? null : idx)
                }
              >
                <span className="text-gray-900">{onderdeel.name}</span>
                {openVeldIndex === idx ? (
                  <FiChevronUp className="text-gray-600" />
                ) : (
                  <FiChevronDown className="text-gray-600" />
                )}
              </button>

              {openVeldIndex === idx && (
                <div className="px-5 py-2 bg-gray-50">
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Competition };
