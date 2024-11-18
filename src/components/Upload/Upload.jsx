import React, { useState } from "react";

const competitions = [
  { id: 1, name: "BK Studenten" },
  { id: 2, name: "Vlaams Kampioenschap" },
  { id: 3, name: "Memorial Van Damme" },
]; // Mock competition list
interface NavProps {
  handlePageSwitch: (page: string) => void;
}

const Upload = ( ) => {
  const [video, setVideo] = useState(null);
  const [competitionQuery, setCompetitionQuery] = useState("");
  const [filteredCompetitions, setFilteredCompetitions] = useState(competitions);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [newCompetitionName, setNewCompetitionName] = useState("");
  const [createMode, setCreateMode] = useState(false);

  // Handle video upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  // Search for competition
  const handleCompetitionSearch = (e) => {
    const query = e.target.value;
    setCompetitionQuery(query);

    if (query.trim() === "") {
      setFilteredCompetitions(competitions);
    } else {
      const matches = competitions.filter((comp) =>
        comp.name.toLowerCase().includes(query.toLowerCase())
      );

      if (matches.length > 0) {
        setFilteredCompetitions(matches);
      } else {
        setFilteredCompetitions([]);
      }
    }
  };

  // Handle new competition creation
  const handleCreateCompetition = () => {
    if (newCompetitionName.trim() !== "") {
      const newCompetition = { id: competitions.length + 1, name: newCompetitionName };
      competitions.push(newCompetition); // Ideally, update the database here
      setSelectedCompetition(newCompetition);
      setCreateMode(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100  flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload Video</h1>

      {/* Video Upload Section */}
      <div className="mb-6 w-full max-w-md">
        <label className="block text-gray-700 font-medium mb-2">Upload Video:</label>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="border border-gray-300 p-2 w-full"
        />
        {video && <p className="text-sm text-green-600 mt-2">Uploaded: {video.name}</p>}
      </div>

      {/* Competition Selection Section */}
      <div className="w-full max-w-md">
        <label className="block text-gray-700 font-medium mb-2">Select Competition:</label>
        <input
          type="text"
          value={competitionQuery}
          onChange={handleCompetitionSearch}
          placeholder="Search for a competition"
          className="border border-gray-300 p-2 w-full mb-2"
        />

        {/* Filtered Results */}
        {!createMode && filteredCompetitions.length > 0 && (
          <ul className="border border-gray-300 bg-white max-h-40 overflow-y-auto">
            {filteredCompetitions.map((comp) => (
              <li
                key={comp.id}
                className={`p-2 cursor-pointer hover:bg-blue-100 ${
                  selectedCompetition?.id === comp.id ? "bg-blue-200" : ""
                }`}
                onClick={() => setSelectedCompetition(comp)}
              >
                {comp.name}
              </li>
            ))}
          </ul>
        )}

        {/* No Matches Found */}
        {!createMode && filteredCompetitions.length === 0 && (
          <div className="text-sm text-gray-600 mt-2">
            No matches found.{" "}
            <button
              className="text-blue-600 underline"
              onClick={() => setCreateMode(true)}
            >
              Create a new competition
            </button>
          </div>
        )}

        {/* Create New Competition */}
        {createMode && (
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">
              Create New Competition:
            </label>
            <input
              type="text"
              value={newCompetitionName}
              onChange={(e) => setNewCompetitionName(e.target.value)}
              placeholder="Enter competition name"
              className="border border-gray-300 p-2 w-full"
            />
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleCreateCompetition}
            >
              Save Competition
            </button>
            <button
              className="mt-2 ml-4 px-4 py-2 bg-gray-300 rounded"
              onClick={() => setCreateMode(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="mt-6">
        {video && selectedCompetition && (
          <div className="p-4 bg-green-100 border border-green-500 rounded">
            <h2 className="font-bold text-green-800">Summary</h2>
            <p>
              <strong>Video:</strong> {video.name}
            </p>
            <p>
              <strong>Competition:</strong> {selectedCompetition.name}
            </p>
          </div>
        )}
      </div>
    </div>

  );
};

export default Upload;
