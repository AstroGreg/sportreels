import React, { useState, useEffect } from "react";

// Define the athlete result data type
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


 return (
   <div className="p-6 bg-gray-100 rounded-lg max-w-full h-full overflow-auto snap-start z-5">
     <div className="mb-4 z-5">
       <button
         onClick={handleCloseResults}
         className="text-gray-500 hover:text-gray-700 text-2xl float-end"
         aria-label="Close"
       >
         &times;
       </button>
     </div>

     <div className="text-center mb-6">
       <h1 className="text-3xl font-semibold text-gray-800">{eventName}</h1>
       <h2 className="text-xl text-gray-600 mt-2">{videoTitle}</h2>
     </div>

     {/* Scrollable List of Results */}
     <div className="overflow-y-auto  z-5">
       {results.map((result, index) => (
         <div key={index} className="p-4 mb-4 bg-white rounded-lg shadow-lg">
           <div className="flex justify-between">
             <div className="text-xl font-semibold">{`#${result.position} ${result.name}`}</div>
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
