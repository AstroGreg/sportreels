// src/VideoList.tsx

import React, { useState } from "react";
import { VideoEvent } from "./types";
import VideoContainer from "../Video/rendering/VideoContainer";

interface VideoListProps {
  videos: VideoEvent[];
  onBack: () => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, onBack }) => {
  // Sort by watchCount descending
  const sortedVideos = [...videos].sort((a, b) => b.watchCount - a.watchCount);

  // Control whether we're showing the list or playing a specific video
  const [selectedVideo, setSelectedVideo] = useState(null);

  // If we have a selected video, show the VideoContainer
  if (selectedVideo) {
    return (
      <VideoContainer
        key={selectedVideo.video}
        // The VideoContainer expects an array of videos:
        videoUrls={[
          {
            url: selectedVideo.video,
            title: selectedVideo.title,
            description: selectedVideo.description,
          },
        ]}
        handleBackToMenu={() => setSelectedVideo(null)}
      />
    );
  }

  // Otherwise, show the video list
  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center px-3 py-1 mt-4 ml-4 text-sm font-medium text-blue-600 transition-colors duration-200 border border-transparent rounded-md hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        &larr; Back
      </button>

      <div className="max-w-2xl mx-auto my-8 bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 rounded-t-lg">
          <h2 className="text-2xl font-bold">Available Videos</h2>
          <p className="mt-2 text-sm text-gray-600">
            Below is a list of videos sorted by watch count:
          </p>
        </div>

        {/* Video list */}
        <div className="px-6 py-4">
          {sortedVideos.map((vid, idx) => (
            <div
              key={idx}
              className="p-4 mb-3 transition-all duration-200 border border-gray-100 rounded-md shadow-sm cursor-pointer bg-gray-50 hover:shadow-md hover:bg-gray-100"
              onClick={() => setSelectedVideo(vid)} // on card click, set the video
            >
              <p className="text-xs text-gray-500">
                Time: {vid.time} | Watch Count: {vid.watchCount}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {vid.title}
              </h3>
              <p className="text-sm text-gray-700">
                <strong>Author:</strong> {vid.author}
              </p>
              <p className="mt-1 text-xs italic text-gray-500">
                {vid.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
