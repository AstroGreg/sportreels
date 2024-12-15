import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AthleticsResults } from "./Results";
import Elie from "../../fotos/Elie.jpeg";

const mockCompetition = {
  name: "National Championships",
  date: "2024-06-15",
  location: "Main Stadium, Cityville",
  organizer: "National Athletics Federation",
  events: [
    {
      gender: "Men",
      name: "100m",
      heats: [
        {
          name: "Heat 1",
          results: [
            {
              position: 1,
              name: "John Doe",
              club: "Elite Runners",
              result: "10.01",
              isPB: true,
              isSB: false,
            },
            {
              position: 2,
              name: "Mike Smith",
              club: "Speedsters",
              result: "10.10",
              isPB: false,
              isSB: true,
            },
          ],
        },
        {
          name: "Heat 2",
          results: [
            {
              position: 1,
              name: "James Brown",
              club: "Fast Track",
              result: "10.05",
              isPB: true,
              isSB: false,
            },
            {
              position: 2,
              name: "Samuel Lee",
              club: "Quick Feet",
              result: "10.12",
              isPB: false,
              isSB: true,
            },
          ],
        },
      ],
    },
    {
      gender: "Women",
      name: "200m",
      heats: [
        {
          name: "Heat 1",
          results: [
            {
              position: 1,
              name: "Jane Smith",
              club: "Speedsters",
              result: "22.10",
              isPB: true,
              isSB: true,
            },
            {
              position: 2,
              name: "Emily Davis",
              club: "Track Stars",
              result: "22.50",
              isPB: false,
              isSB: false,
            },
          ],
        },
      ],
    },
  ],
};

const CompetitionPage: React.FC = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(
    null
  );
  const [selectedHeat, setSelectedHeat] = useState(null); // Store selected heat for results
  const navigate = useNavigate();

  const handleToggleEvent = (index: number) => {
    setSelectedEventIndex(index === selectedEventIndex ? null : index); // Toggle dropdown
  };

  const handleSelectHeat = (heat: any) => {
    setSelectedHeat(heat); // Set the heat to display results
  };

  const handleCloseResults = () => {
    setSelectedHeat(null); // Close the results view
  };

  if (selectedHeat) {
    return (
      <AthleticsResults
        eventName={`${selectedHeat.name}`}
        videoTitle={`${mockCompetition.name}`}
        results={selectedHeat.results}
        handleCloseResults={handleCloseResults}
      />
    );
  }

  return (

      <div
        className="h-full p-6 bg-gray-200"

      >
      {/* Competition Header */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">
          {mockCompetition.name}
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          <strong>Date:</strong> {mockCompetition.date}
        </p>
        <p className="mt-1 text-lg text-gray-600">
          <strong>Location:</strong> {mockCompetition.location}
        </p>
        <p className="mt-1 text-lg text-gray-600">
          <strong>Organizer:</strong> {mockCompetition.organizer}
        </p>
      </div>

      {/* Events Section */}
      <div className="bg-white rounded-lg shadow-lg">
        <h2 className="p-6 text-2xl font-semibold text-gray-800">Events</h2>
        <div>
          {mockCompetition.events.map((event, index) => (
            <div key={index}>
              {/* Event Row */}
              <div
                className={`flex items-center justify-between p-4 cursor-pointer ${
                  selectedEventIndex === index ? "bg-gray-100" : ""
                } hover:bg-gray-50`}
                onClick={() => handleToggleEvent(index)}
              >
                <p className="text-lg font-semibold text-gray-700">{`${event.gender} ${event.name}`}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 transition-transform ${
                    selectedEventIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Heats Dropdown */}
              {selectedEventIndex === index && (
                <div className="border-t border-gray-200">
                  {event.heats.map((heat, heatIndex) => (
                    <div
                      key={heatIndex}
                      className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleSelectHeat(heat)}
                    >
                      <p className="text-lg text-gray-600">{heat.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage;
