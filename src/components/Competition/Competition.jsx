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
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center px-3 py-1 mt-4 ml-4 text-sm font-medium text-blue-600 transition-colors duration-200 border border-transparent rounded-md hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        &larr; Back to Search
      </button>

      <div className="max-w-2xl mx-auto my-8 bg-white rounded-lg shadow-md">
        {/* Competition Header */}
        <div className="px-6 py-5 bg-white border-b border-gray-200 rounded-t-lg">
          <h2 className="text-2xl font-bold">{competitionName}</h2>
          <p className="mt-2 text-sm text-gray-600">
            Here are your Loop and Veld events:
          </p>
        </div>

        {/* Loop-onderdelen */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Loop onderdelen
          </h3>
          {loopEvents.map((onderdeel: EventGroup, idx: number) => (
            <div key={idx} className="mb-4">
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-left transition-colors duration-200 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
                onClick={() => setOpenLoopIndex(openLoopIndex === idx ? null : idx)}
              >
                <span className="font-medium">{onderdeel.name}</span>
                {openLoopIndex === idx ? (
                  <FiChevronUp className="text-gray-600" />
                ) : (
                  <FiChevronDown className="text-gray-600" />
                )}
              </button>

              {openLoopIndex === idx && (
                <div className="px-4 py-2 mt-1 bg-gray-50 rounded-b-md">
                  {onderdeel.events.map((ev, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-2 py-1 mb-2 bg-white border border-gray-200 rounded-md"
                    >
                      <div className="text-sm text-gray-700">
                        {ev.time} / {ev.category} {ev.round && `(${ev.round})`}
                      </div>
                    </div>
                  ))}

                  <button
                    className="px-4 py-2 mt-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        <div className="px-6 py-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Veld onderdelen
          </h3>
          {veldEvents.map((onderdeel: EventGroup, idx: number) => (
            <div key={idx} className="mb-4">
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-left transition-colors duration-200 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
                onClick={() => setOpenVeldIndex(openVeldIndex === idx ? null : idx)}
              >
                <span className="font-medium">{onderdeel.name}</span>
                {openVeldIndex === idx ? (
                  <FiChevronUp className="text-gray-600" />
                ) : (
                  <FiChevronDown className="text-gray-600" />
                )}
              </button>

              {openVeldIndex === idx && (
                <div className="px-4 py-2 mt-1 bg-gray-50 rounded-b-md">
                  {onderdeel.events.map((ev, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-2 py-1 mb-2 bg-white border border-gray-200 rounded-md"
                    >
                      <div className="text-sm text-gray-700">
                        {ev.time} / {ev.category} {ev.round && `(${ev.round})`}
                      </div>
                    </div>
                  ))}

                  <button
                    className="px-4 py-2 mt-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
