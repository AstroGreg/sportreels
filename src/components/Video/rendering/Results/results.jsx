import React from "react";
import { useNavigate } from "react-router-dom";

interface AthleteResult {
  position: number;
  name: string;
  club: string;
  result: string;
  isPB: boolean; // Personal Best indicator
  isSB: boolean; // Season Best indicator
}

interface AthleticsResultsProps {
  eventName: string;
  videoTitle: string;
  results: AthleteResult[];
  handleCloseResults: () => void;
}

const AthleticsResults: React.FC<AthleticsResultsProps> = ({
  eventName,
  videoTitle,
  results,
  handleCloseResults,
}) => {
  const navigate = useNavigate();

  const handleNavigateToProfile = (name: string) => {
    navigate(`/athlete/${name}`)
  };

  return (
    <div className="max-w-full p-6 bg-gray-100 rounded-lg snap-start z-5 max-h-[calc(10vh)]">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-gray-100">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleCloseResults}
            className="text-2xl text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">{eventName}</h1>
          <h2 className="mt-2 text-xl text-gray-600">{videoTitle}</h2>
        </div>
      </div>

      {/* Scrollable Results */}
      <div className="overflow-y-auto max-h-[calc(70vh)]">
        {results.map((result, index) => (
          <div
            key={index}
            className="p-4 mb-4 bg-white rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleNavigateToProfile(index)}
          >
            <div className="flex justify-between">
              <div className="text-xl font-semibold">
                {`#${result.position} ${result.name}`}
              </div>
              <div className="text-sm text-gray-500">{result.club}</div>
            </div>
            <div className="text-lg">{result.result}</div>
            <div className="mt-2 text-sm">
              {result.isPB && <span className="text-green-500">Personal Best</span>}
              {result.isSB && <span className="ml-2 text-blue-500">Season Best</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AthleticsResults;
