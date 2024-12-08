import React, { useState } from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Elie from "../../fotos/Elie.jpeg"; // Background image

const competitions = [
  { id: 1, name: "BK Studenten" },
  { id: 2, name: "Vlaams Kampioenschap" },
  { id: 3, name: "Memorial Van Damme" },
]; // Mock competition list

const events = ["400m", "200m", "High Jump", "100m", "Long Jump"]; // Mock event list

const heats = ["FINAL", "Heat 1", "Heat 2", "Heat 3", "Semi-Final"]; // Mock heats

const Upload = () => {
  const [video, setVideo] = useState(null);
  const [competitionQuery, setCompetitionQuery] = useState("");
  const [filteredCompetitions, setFilteredCompetitions] =
    useState(competitions);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [newCompetitionName, setNewCompetitionName] = useState("");
  const [createMode, setCreateMode] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedHeat, setSelectedHeat] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null); // 'success' or 'failed'
  const [currentStep, setCurrentStep] = useState(1); // Step control

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
      const newCompetition = {
        id: competitions.length + 1,
        name: newCompetitionName,
      };
      competitions.push(newCompetition); // Ideally, update the database here
      setSelectedCompetition(newCompetition);
      setCreateMode(false);
      setCurrentStep(3); // Go to the next step (event and heat selection)
    }
  };

  // Handle event and heat selection
  const handleEventSelection = (e) => {
    setSelectedEvent(e.target.value);
  };

  const handleHeatSelection = (e) => {
    setSelectedHeat(e.target.value);
  };

  // Start uploading process
  const handleUpload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUploadStatus("success"); // Change to "failed" to simulate a failure
    }, 5000); // Simulate a 5-second upload time
  };

  // Reset all states for a fresh start
  const resetUploadFlow = () => {
    setVideo(null);
    setCompetitionQuery("");
    setFilteredCompetitions(competitions);
    setSelectedCompetition(null);
    setNewCompetitionName("");
    setCreateMode(false);
    setSelectedEvent("");
    setSelectedHeat("");
    setIsLoading(false);
    setUploadStatus(null);
    setCurrentStep(1); // Go back to the first step
  };

  // Render a success or failure screen after upload
  const renderUploadResult = () => {
    if (uploadStatus === "success") {
      return (
        <div className="flex flex-col items-center text-white">
          <FaCheckCircle className="text-5xl text-green-500" />
          <p className="mt-4 text-lg text-green-600">Upload Successful!</p>
          <button
            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded"
            onClick={() => resetUploadFlow()} // Reset the upload flow
          >
            Go to Upload Again
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center text-white">
          <FaTimesCircle className="text-5xl text-red-500" />
          <p className="mt-4 text-lg text-red-600">Upload Failed</p>
          <button
            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded"
            onClick={() => setUploadStatus(null)} // Reset status and try again
          >
            Retry
          </button>
        </div>
      );
    }
  };

  // Render Preview screen
  const renderPreviewScreen = () => {
    return (
      <div className="flex flex-col items-center text-gray-700">
        <h2 className="mb-4 text-3xl font-bold">Preview Your Upload</h2>
        <p>Video: {video ? video.name : "No video uploaded"}</p>
        <p>
          Competition:{" "}
          {selectedCompetition
            ? selectedCompetition.name
            : "No competition selected"}
        </p>
        <p>Event: {selectedEvent || "No event selected"}</p>
        <p>Heat: {selectedHeat || "No heat selected"}</p>
        <button
          onClick={handleUpload}
          className="px-6 py-2 mt-4 text-white bg-blue-600 rounded"
        >
          Confirm and Upload
        </button>
        <button
          className="px-6 py-2 mt-2 text-white bg-gray-600 rounded"
          onClick={() => setCurrentStep(2)} // Go back to competition selection
        >
          Edit Selection
        </button>
      </div>
    );
  };

  const renderCompetitionSelectionScreen = () => {
    return (
      <div className="flex flex-col items-center text-black">
        <h2 className="mb-4 text-3xl font-bold">Select Competition</h2>
        <input
          type="text"
          value={competitionQuery}
          onChange={handleCompetitionSearch}
          placeholder="Search for competition"
          className="p-2 mb-4 text-black border rounded"
        />
        <ul className="w-full">
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
        {filteredCompetitions.length === 0 && !createMode && (
          <div>
            <p className="mt-4">
              Competition not found? <strong>Not listed?</strong>
            </p>
            <button
              className="mt-4 text-blue-500"
              onClick={() => setCreateMode(true)}
            >
              Add New Competition
            </button>
          </div>
        )}
        {createMode && (
          <div>
            <input
              type="text"
              value={newCompetitionName}
              onChange={(e) => setNewCompetitionName(e.target.value)}
              placeholder="Enter competition name"
              className="p-2 mb-4 text-black border rounded"
            />
            <button
              onClick={handleCreateCompetition}
              className="px-6 py-2 mt-4 text-white bg-blue-600 rounded"
            >
              Save Competition
            </button>
          </div>
        )}
        {selectedCompetition && (
          <button
            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded"
            onClick={() => setCurrentStep(3)} // Next step: select event and heat
          >
            Next: Select Event and Heat
          </button>
        )}
      </div>
    );
  };

  const renderLoadingScreen = () => {
    return (
      <div className="flex items-center justify-center text-gray-700">
        <div className="spinner-border animate-spin"></div>
        <p>Uploading...</p>
      </div>
    );
  };

  const renderEventAndHeatSelectionScreen = () => {
    return (
      <div className="flex flex-col items-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Select Event and Heat</h2>

        <select
          value={selectedEvent}
          onChange={handleEventSelection}
          className="p-2 mb-4 text-black border rounded"
        >
          <option value="">Select Event</option>
          {events.map((event, index) => (
            <option key={index} value={event}>
              {event}
            </option>
          ))}
        </select>

        <select
          value={selectedHeat}
          onChange={handleHeatSelection}
          className="p-2 mb-4 text-black border rounded"
        >
          <option value="">Select Heat</option>
          {heats.map((heat, index) => (
            <option key={index} value={heat}>
              {heat}
            </option>
          ))}
        </select>

        <button
          onClick={() => setCurrentStep(4)} // Go to preview step
          className="px-6 py-2 mt-4 text-white bg-blue-600 rounded"
        >
          Next: Preview
        </button>
      </div>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return renderLoadingScreen();
    }
    if (uploadStatus) {
      return renderUploadResult();
    }

    if (currentStep === 1) {
      return (
        <div className="flex flex-col items-center">
          <AiOutlineVideoCamera className="mb-4 text-5xl" />
          <input type="file" accept="video/*" onChange={handleVideoUpload} />
          {video && <p className="mt-4">Video: {video.name}</p>}
          <button
            onClick={() => setCurrentStep(2)}
            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded"
            disabled={!video} // Disable button until a video is uploaded
          >
            Next: Select Competition
          </button>
        </div>
      );
    }

    if (currentStep === 2) {
      return renderCompetitionSelectionScreen();
    }

    if (currentStep === 3) {
      return renderEventAndHeatSelectionScreen();
    }

    if (currentStep === 4) {
      return renderPreviewScreen();
    }

    return null;
  };

  return (
    <div
      className="flex items-center justify-center h-full bg-center bg-cover"
      style={{ backgroundImage: `url(${Elie})` }}
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {renderContent()}
      </div>
    </div>
  );
};

export default Upload;
