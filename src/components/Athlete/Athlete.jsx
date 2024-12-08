import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Elie from "../../fotos/Elie.jpeg";
import "chart.js/auto";

const AthleteProfile: React.FC = () => {
  const { id } = useParams();
  const [athlete, setAthlete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fakeAthleteDB = [
      {
        id: 3,
        name: "John Doe",
        club: "Elite Runners",
        stats: {
          events: [
            {
              name: "100m",
              personalBest: "9.58",
              seasonBest: "9.70",
              competitions: [
                {
                  date: "2023-01-15",
                  competitionName: "City Open",
                  result: "10.1",
                  position: 2,
                  hasVideo: true,
                  videoUrl: "https://example.com/video-city-open",
                },
                {
                  date: "2023-03-20",
                  competitionName: "Regional Championship",
                  result: "9.8",
                  position: 1,
                  hasVideo: false,
                },
              ],
            },
            {
              name: "200m",
              personalBest: "19.19",
              seasonBest: "19.50",
              competitions: [
                {
                  date: "2023-02-15",
                  competitionName: "Spring Invitational",
                  result: "20.5",
                  position: 3,
                  hasVideo: true,
                  videoUrl: "https://example.com/video-200m-spring",
                },
              ],
            },
          ],
        },
      },
    ];

    setLoading(true);
    const fetchedAthlete = fakeAthleteDB.find((athlete) => athlete.id === Number(id));
    setTimeout(() => {
      setAthlete(fetchedAthlete || null);
      if (fetchedAthlete?.stats.events.length > 0) {
        setSelectedEvent(fetchedAthlete.stats.events[0]);
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <div className="mt-10 text-center text-gray-600">Loading athlete profile...</div>;
  }

  if (!athlete) {
    return (
      <div
        className="flex items-center justify-center h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${Elie})` }}
      >
        <div className="p-2 text-4xl bg-white rounded-lg">
          <p>Athlete not found</p>
        </div>
      </div>
    );
  }

  const graphData = {
    labels: selectedEvent?.competitions.map((comp) => new Date(comp.date).getFullYear()) || [],
    datasets: [
      {
        label: "",
        data: selectedEvent?.competitions.map((comp) => comp.result) || [],
        fill: false,
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
        tension: 0.3,
        pointRadius: 8, // Bigger data points
      },
    ],
  };

  const graphOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const competition = selectedEvent?.competitions[context.dataIndex];
            return `Time: ${competition.result}s\nDate: ${competition.date}`;
          },
        },
      },
      legend: {
        display: false, // Remove label bar
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (value, index, ticks) {
            return ticks[index].label; // Show only years
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Hero Section */}
      <div className="relative p-6 mb-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">{athlete.name}</h1>
        <p className="text-xl text-gray-500">{athlete.club}</p>
      </div>

      {/* Stats Section */}
      <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-700">{selectedEvent?.name} Stats</h2>
        <div className="flex justify-between mt-4">
          <p className="text-gray-600">
            <strong>Personal Best:</strong> {selectedEvent?.personalBest}
          </p>
          <p className="text-gray-600">
            <strong>Season Best:</strong> {selectedEvent?.seasonBest}
          </p>
        </div>
      </div>

      {/* Graph Section with Tabs */}
  
        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-4 space-x-4">
            {athlete.stats.events.map((event, index) => (
              <button
                key={index}
                className={`px-4 py-2 font-semibold border rounded-lg ${
                  selectedEvent?.name === event.name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                {event.name}
              </button>
            ))}
          </div>
          <Line data={graphData} options={graphOptions} />
        </div>


      {/* Competitions Section */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-700">{selectedEvent?.name} Competitions</h2>
        <ul className="mt-4 space-y-8">
          {selectedEvent?.competitions.map((competition, index) => (
            <li key={index} className="p-4 bg-gray-100 border border-gray-200 rounded-lg">
              <p className="text-xl font-semibold text-gray-800">{competition.competitionName}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 text-sm font-bold text-white bg-blue-500 rounded-full">
                    #{competition.position}
                  </span>
                  <p className="text-lg font-semibold text-gray-700">
                    <span className="text-gray-500">Result:</span> {competition.result}s
                  </p>
                </div>
                {competition.hasVideo ? (
                  <a
                    href={competition.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    Watch Video
                  </a>
                ) : (
                  <span className="px-4 py-2 text-sm font-semibold text-white bg-gray-400 rounded-lg">
                    No Video
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AthleteProfile;
