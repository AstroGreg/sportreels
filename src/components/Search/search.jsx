import React, { useState } from "react";
import "../../App.css";
import { AiOutlineCalendar } from "react-icons/ai";
import VideoContainer from "../Video/rendering/VideoContainer";
import Elie from "../../fotos/Elie.jpeg";

const results = [
  { event: "1500m", competition: "BK Studenten", date: "2024-02-27", location: "Gent", video: "dummy-video1.mp4" },
  { event: "800M", competition: "Vlaams Kampioenschap 2024", date: "2024-05-01", location: "Oordegem", video: "dummy-video2.mp4" },
  { event: "800m", competition: "Belgisch Kampioenschap 2024", date: "2023-02-27", location: "Brussel", video: "dummy-video3.mp4" },
  { event: "100m", competition: "BK Senioren", date: "2024-06-15", location: "Gent", video: "dummy-video4.mp4" },
  { event: "100m", competition: "BK Senioren", date: "2024-06-15", location: "Gent", video: "dummy-video4.mp4" },
  { event: "100m", competition: "BK Senioren", date: "2021-06-15", location: "Gent", video: "dummy-video4.mp4" },
  { event: "100m", competition: "BK Senioren", date: "2024-06-15", location: "Gent", video: "dummy-video4.mp4" },
  { event: "100m", competition: "BK Senioren", date: "2024-06-15", location: "Gent", video: "dummy-video4.mp4" },
  { event: "100m", competition: "BK Senioren", date: "2024-06-15", location: "Gent", video: "dummy-video4.mp4" },
  { event: "100m", competition: "BK Senioren", date: "2024-06-15", location: "Gent", video: "dummy-video4.mp4" },
  { event: "100m", competition: "BK Senioren", date: "2024-06-15", location: "Gent", video: "dummy-video4.mp4" },
  // ... more data
];

const groupByYear = (data: typeof results) => {
  return data.reduce((groups: Record<string, typeof results>, event) => {
    const year = event.date.split("-")[0]; // Extract the year from the date
    if (!groups[year]) groups[year] = [];
    groups[year].push(event);
    return groups;
  }, {});
};

const Search = ({ Nav }: { Nav: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isShaking, setIsShaking] = useState(false);
  const [searchType, setSearchType] = useState("competition"); // Default search type (can be competition, athlete, or location)

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    // Update the filter state based on the search type
    setFilters((prev) => ({
      ...prev,
      [searchType]: e.target.value,
    }));

    // Trigger shake effect
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleRemoveFilter = (key: string) => {
    const updatedFilters = { ...filters };
    delete updatedFilters[key];
    setFilters(updatedFilters);
  };

  const handleCardClick = () => {
    const videoProps = { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4", title: "BK Studenten", description: "blablla" };
    setSelectedVideo(videoProps);
  };

  const handleBackToMenu = () => {
    setSelectedVideo(null);
  };

  // Filter results based on query and additional filters
  const filteredResults = results.filter((result) => {
    const matchesQuery = result[searchType]?.toLowerCase().includes(query.toLowerCase());
    const matchesFilters = Object.entries(filters).every(([key, value]) =>
      value ? result[key]?.toLowerCase().includes(value.toLowerCase()) : true
    );
    return matchesQuery && matchesFilters;
  });

  const groupedResults = groupByYear(filteredResults);

  if (selectedVideo) {
    return (
      <VideoContainer videoUrls={[selectedVideo]} handleBackToMenu={handleBackToMenu} />
    );
  }

  return (
    <div className="max-w-[540px] w-full bg-gray-100 rounded-lg relative">
      {/* Sticky Search Bar */}
      <div className="sticky top-0 z-50 p-6 mb-3 bg-white shadow-lg rounded-b-3xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Search Videos</h1>
        <div className="flex items-center justify-center mt-4 space-x-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder={`Search by ${searchType.charAt(0).toUpperCase() + searchType.slice(1)}`}
            value={query}
            onChange={handleSearchInput}
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
          />
        </div>

        {/* Filter Types (Horizontal Scroll with Tiles) */}
        <div className="flex mt-4 space-x-4 overflow-x-auto">
          {["competition", "athlete", "location"].map((type) => (
            <div
              key={type}
              onClick={() => {
                setSearchType(type); // Set search type when clicking on a filter tile
                if (filters[type]) {
                  handleRemoveFilter(type);
                } else {
                  handleFilterChange(type, ""); // You can change this to open a modal or inline input for more specific filters
                }
              }}
              className={`cursor-pointer px-4 py-2 rounded-lg ${filters[type] ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          ))}
        </div>

        {/* Selected Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(filters).map(([key, value]) => (
            <div key={key} className="flex items-center px-3 py-1 text-white bg-blue-500 rounded-full">
              <span>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</span>
              <button
                className="ml-2 text-xs font-bold"
                onClick={() => handleRemoveFilter(key)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
  
<div className="px-4">
  {Object.keys(groupedResults).length > 0 ? (
    Object.entries(groupedResults).map(([year, events]) => (
      <div key={year} className="mb-6">
        <h2 className="text-xl font-bold text-gray-700">{year}</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center p-4 transition-transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl"
              onClick={() => handleCardClick(event.video)}
            >
              <div className="flex-shrink-0 p-3 text-white bg-blue-500 rounded-full">
                <AiOutlineCalendar size={24} />
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{event.competition}</h3>
                <p className="text-sm text-gray-500">
                  {event.date} - {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))
  ) : (
    <div className="pt-5 text-center">
            <img src={Elie} alt="Placeholder" className="object-cover w-full mb-5" />
         <p className="text-gray-600">No results found.</p>

   
    </div>
  )}
</div>


      {/* Navigation */}
      {Nav}
    </div>
  );
};

export default Search;
