import React, { useState, useEffect } from "react";
import "../../App.css";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  calendarOutline
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import Elie from "../../fotos/Elie.jpeg";
import { useNavigate, useLocation } from "react-router-dom";

const results = [
  {
    event: "1500m",
    competition: "BK Studenten",
    date: "2024-02-27",
    location: "Gent",
    video: "dummy-video1.mp4",
    athletes: ["Elie", "John Doe", "Jane Smith"],
    heat: "Heat 1"
  },
  {
    event: "800M",
    competition: "Vlaams Kampioenschap 2024",
    date: "2024-05-01",
    location: "Oordegem",
    video: "dummy-video2.mp4",
    athletes: ["Peter Johnson", "Marie Curie"],
    heat: "Heat 2"
  },
  {
    event: "800m",
    competition: "Belgisch Kampioenschap 2024",
    date: "2023-02-27",
    location: "Brussel",
    video: "dummy-video3.mp4",
    athletes: ["Alice", "Bob"],
    heat: "Heat 3"
  },
  {
    event: "100m",
    competition: "BK Senioren",
    date: "2024-06-15",
    location: "Gent",
    video: "dummy-video4.mp4",
    athletes: ["Charlie", "Dave"],
    heat: "Heat 1"
  },
  // ...more data
];

const groupByYear = (data: typeof results) => {
  return data.reduce((groups: Record, event) => {
    const year = event.date.split("-")[0];
    if (!groups[year]) groups[year] = [];
    groups[year].push(event);
    return groups;
  }, {});
};

const Search = ({ Nav }: { Nav?: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [query, setQuery] = useState(location.state?.query || "");
  const [filters, setFilters] = useState(location.state?.filters || {});
  const [searchType, setSearchType] = useState(location.state?.searchType || "competition");

  const clearSearchInput = () => {
    setQuery("");
    for (const key in filters) {
      if (filters[key] === "") {
        setFilters((prev) => {
          const updatedFilters = { ...prev };
          delete updatedFilters[key];
          return updatedFilters;
        });
      }
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setFilters((prev) => ({
      ...prev,
      [searchType]: val,
    }));
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleRemoveFilter = (key: string) => {
    setQuery("");
    const updatedFilters = { ...filters };
    delete updatedFilters[key];
    setFilters(updatedFilters);
  };

  const handleCompetitionClick = (competitionName: string) => {
    navigate(`/competition/${encodeURIComponent(competitionName)}`, {
      state: {
        query,
        filters,
        searchType
      }
    });
  };

  const matchesQuery = (result: typeof results[0]) => {
    const lowerQuery = query.toLowerCase();
    if (searchType === "athlete") {
      return result.athletes?.some((athlete) =>
        athlete.toLowerCase().includes(lowerQuery)
      );
    }
    return result[searchType]?.toLowerCase().includes(lowerQuery);
  };

  const filteredResults = results.filter((result) => {
    const queryMatch = matchesQuery(result);
    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      if (key === "athlete") {
        return result.athletes?.some((athlete) =>
          athlete.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        return result[key]?.toLowerCase().includes(value.toLowerCase());
      }
    });
    return queryMatch && matchesFilters;
  });

  const groupedResults = groupByYear(filteredResults);

  return (
    <>
      <div className="sticky top-0 z-50 p-6 mb-3 bg-white shadow-lg rounded-b-3xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Search Videos</h1>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <input
            type="text"
            placeholder={`Search by ${searchType.charAt(0).toUpperCase() + searchType.slice(1)}`}
            value={query}
            onChange={handleSearchInput}
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
          />
        </div>

        <div className="flex mt-4 space-x-4 overflow-x-auto">
          {["competition", "athlete", "location", "heat"].map((type) => (
            <div
              key={type}
              onClick={() => {
                
                clearSearchInput();
                setSearchType(type);
                if (filters[type]) {
                  handleFilterChange(type, filters[type]);
                } else {
                  handleFilterChange(type, "");
                }
              }}
              className={`cursor-pointer px-4 py-2 rounded-lg ${filters[type] === undefined ? "bg-gray-300" : "bg-blue-500 text-white"}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          ))}
        </div>

        {/* Selected Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(filters)
            .filter(([_, value]) => value.trim().length > 0)
            .map(([key, value]) => (
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
                    onClick={() => handleCompetitionClick(event.competition)}
                  >
                    <IonIcon icon={calendarOutline} className="flex-shrink-0 w-6 h-6 p-3 text-white bg-blue-500 rounded-full"    />
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
    </>
  );
};

export default Search;
