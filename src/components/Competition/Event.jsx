import React from "react";


const EventItem = ({
    time,
    count,
    category,
    round,
    videoUrl,
    onderdeelName,
    watchVideoClick,
  }: {
    time: string;
    count: number;
    category: string;
    round: string;
    videoUrl: string;
    onderdeelName: string;
    watchVideoClick: () => void
  }) => {



  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200">
      <div>
        <p className="font-medium text-gray-800">
          {time} • {count} atleten
        </p>
        <p className="text-sm text-gray-500">{category} {round}</p>
      </div>
      <button
        onClick={watchVideoClick}
        className="px-4 py-1 font-semibold text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
      >
        Watch Video
      </button>
    </div>) 
  };

export { EventItem }