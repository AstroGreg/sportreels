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
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10); // Default value
  const [tablePixelHeight, setTablePixelHeight] = useState(40);

  // Adjust results per page based on screen size
  useEffect(() => {
    const updateResultsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setResultsPerPage(8); // Larger screens
        setTablePixelHeight(70);
      } else if (window.innerWidth >= 768) {
        setResultsPerPage(7); // Medium screens
        setTablePixelHeight(65);
      } else {
        setResultsPerPage(6); // Smaller screens
        setTablePixelHeight(55);
      }
    };

    updateResultsPerPage();
    window.addEventListener("resize", updateResultsPerPage);
    return () => window.removeEventListener("resize", updateResultsPerPage);
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(results.length / resultsPerPage);

  // Get results for the current page
  const currentResults = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  // Fill remaining rows to ensure a consistent table size
  const filledResults = [
    ...currentResults,
    ...Array(resultsPerPage - currentResults.length).fill(null),
  ];

  // Navigate to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Navigate to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg max-w-full h-full snap-start z-5">
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

      <div className="overflow-x-auto z-5">
        <table className="min-w-full table-auto border-collapse  z-10">
          <thead className="sticky top-0 bg-blue-600 text-white z-10">
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left text-sm w-[10%]">Position</th>
              <th className="py-3 px-4 text-left text-sm w-[50%]">Name & Club</th>
              <th className="py-3 px-4 text-left text-sm">Result</th>
            </tr>
          </thead>
          <tbody className="z-10">
            {filledResults.map((result, index) => (
              <tr
                key={index}
                className={` z-10 border-b border-gray-200 ] ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
               style={{ height: `${tablePixelHeight}px` }}
              >
                {result ? (
                  <>
                    <td className="py-3 px-4 text-left z-10">{result.position}</td>
                    <td className="py-3 px-4 text-left z-10">
                      <div>{result.name}</div>
                      <div className="text-sm text-gray-500  z-10">{result.club}</div>
                    </td>
                    <td className="py-3 px-4 text-left  z-10">
                      <span>{result.result}</span>
                
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-3 px-4 text-left  z-10">&nbsp;</td>
                    <td className="py-3 px-4 text-left  z-10">&nbsp;</td>
                    <td className="py-3 px-4 text-left  z-10">&nbsp;</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-semibold ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } rounded`}
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-semibold ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } rounded`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AthleticsResults;
