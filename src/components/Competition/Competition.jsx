 // src/Competition.tsx

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { loopEvents, veldEvents } from "./data";
import { EventGroup, VideoEvent } from "./types";
import VideoList from "./VideoList";

interface CompetitionProps {
  competitionName: string;
  onBack: () => void;
}

const Competition: React.FC<CompetitionProps> = ({ competitionName, onBack }) => {
  // If user clicks “Watch available videos,” we show the VideoList for that event group
  const [showVideoList, setShowVideoList] = useState(false);
  const [videosToShow, setVideosToShow] = useState([]);

  // Collapsible sub-events
  const [openLoopIndex, setOpenLoopIndex] = useState(null);
  const [openVeldIndex, setOpenVeldIndex] = useState(null);

  const handleWatchAvailableVideos = (videos: VideoEvent[]) => {
    setVideosToShow(videos);
    setShowVideoList(true);
  };

  // Coming back from VideoList
  const handleBackFromVideoList = () => {
    setShowVideoList(false);
  };

  // If user chose “Watch available videos,” show the VideoList
  if (showVideoList) {
    return <VideoList videos={videosToShow} onBack={handleBackFromVideoList} />;
  }

  // Otherwise, show the main “Competition” screen
  return (
    <div className="min-h-screen bg-gray-100">
      <button
        onClick={onBack}
        className="inline-flex items-center m-3 font-medium text-blue-500 transition-colors hover:text-blue-600"
      >
        &larr; Back to Search
      </button>

      <div className="max-w-2xl mx-auto bg-white">
        <h2 className="px-4 pt-4 text-2xl font-bold text-gray-900">
          {competitionName}
        </h2>
        <p className="px-4 pb-4 text-gray-700">
          Here are your Loop and Veld events:
        </p>

        {/* Loop-onderdelen */}
        <div className="border-t border-gray-200">
          <h3 className="px-4 py-3 text-lg font-semibold text-gray-900 bg-gray-100">
            Loop onderdelen
          </h3>
          {loopEvents.map((onderdeel: EventGroup, idx: number) => (
            <div key={idx} className="border-b border-gray-200">
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

              {openLoopIndex === idx && (
                <div className="px-5 py-2 bg-gray-50">
                  {onderdeel.events.map((ev, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-2 py-1 mb-1 bg-white border border-gray-100 rounded"
                    >
                      <div className="text-sm text-gray-800">
                        {ev.time} / {ev.category} {ev.round && `(${ev.round})`}
                      </div>
                    </div>
                  ))}

                  <button
                    className="px-3 py-2 mt-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                    onClick={() => handleWatchAvailableVideos(onderdeel.events)}
                  >
                    Watch available videos
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Veld-onderdelen */}
        <div className="mt-6 border-t border-gray-200">
          <h3 className="px-4 py-3 text-lg font-semibold text-gray-900 bg-gray-100">
            Veld onderdelen
          </h3>
          {veldEvents.map((onderdeel: EventGroup, idx: number) => (
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
                    <div
                      key={i}
                      className="flex items-center justify-between px-2 py-1 mb-1 bg-white border border-gray-100 rounded"
                    >
                      <div className="text-sm text-gray-800">
                        {ev.time} / {ev.category} {ev.round && `(${ev.round})`}
                      </div>
                    </div>
                  ))}
                  <button
                    className="px-3 py-2 mt-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                    onClick={() => handleWatchAvailableVideos(onderdeel.events)}
                  >
                    Watch available videos
                  </button>
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
// src/Competition/EventItem.tsx