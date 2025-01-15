// src/VideoList.tsx
import React, { useState } from "react";
import { VideoEvent } from "./types";
import VideoContainer  from "../Video/rendering/VideoContainer";

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
        // The VideoContainer expects an array of videos: 
        videoUrls={[
          {
            url: selectedVideo.video,
            title: selectedVideo.title,
            description: selectedVideo.description
          }
        ]}
        handleBackToMenu={() => setSelectedVideo(null)}
      />
    );
  }

  // Otherwise, show the video list
  return (
    <div className="min-h-screen bg-gray-100">
      <button
        onClick={onBack}
        className="inline-flex items-center m-3 font-medium text-blue-500 hover:text-blue-600"
      >
        &larr; Back
      </button>
      <div className="max-w-2xl p-4 mx-auto bg-white">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Available Videos</h2>

        {sortedVideos.map((vid, idx) => (
          <div
            key={idx}
            className="p-3 mb-3 border border-gray-200 rounded shadow-sm cursor-pointer"
            onClick={() => setSelectedVideo(vid)} // <-- on card click, set the video
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
            <p className="text-xs italic text-gray-500">{vid.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
