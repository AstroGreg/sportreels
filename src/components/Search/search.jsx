import React, { useState } from "react";
import "../../App.css";
import Nav from "../Nav/Nav";
import Elie from "../fotos/Elie.jpeg";

const results = [
  { event: "1500m", competition: "BK Studenten", date: "27/02/2024", location: "Gent" },
  { event: "800M", competition: "Vlaams Kampioenschap 2024", date: "1/05/2024", location: "Oordegem" },
  { event: "800m", competition: "Belgisch Kampioenschap 2024", date: "27/02/2023", location: "Brussel" },
  { event: "100m", competition: "BK Senioren", date: "15/06/2024", location: "Gent" },
  { event: "200m", competition: "Vlaams Kampioenschap Jeugd", date: "20/07/2024", location: "Antwerpen" },
  { event: "400m", competition: "Kampioenschap Antwerpen", date: "10/08/2024", location: "Antwerpen" },
  { event: "5000m", competition: "BK Studenten", date: "05/09/2024", location: "Gent" },
  { event: "10km", competition: "Stadsloop Gent", date: "15/10/2024", location: "Gent" },
  { event: "Marathon", competition: "Brussel Marathon", date: "05/11/2024", location: "Brussel" },
  { event: "1500m", competition: "PK Oost-Vlaanderen", date: "10/03/2024", location: "Oordegem" },
  { event: "800m", competition: "PK Antwerpen", date: "17/04/2024", location: "Antwerpen" },
  { event: "3000m steeple", competition: "Vlaams Kampioenschap", date: "25/05/2024", location: "Gent" },
  { event: "400m horden", competition: "Belgisch Kampioenschap", date: "30/06/2024", location: "Brussel" },
  { event: "100m", competition: "Nationale Spelen", date: "12/07/2024", location: "Leuven" },
  { event: "200m", competition: "Internationale Meeting", date: "23/08/2024", location: "Brugge" },
  { event: "4x100m", competition: "BK Estafette", date: "15/09/2024", location: "Gent" },
  { event: "800m", competition: "Nacht van de Atletiek", date: "20/07/2024", location: "Heusden-Zolder" },
  { event: "1500m", competition: "Memorial Van Damme", date: "30/08/2024", location: "Brussel" },
  { event: "5000m", competition: "BK Senioren", date: "12/06/2024", location: "Gent" },
  { event: "Cross Country", competition: "BK Cross", date: "18/03/2024", location: "Roeselare" },
];

const Search = ({Nav} : {Nav: React.ReactNode}) => {
  const [query, setQuery] = useState("");

  const filteredResults = results.filter((result) =>
    result.competition.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="max-w-[540px] w-full bg-gray-100 rounded-lg z-0 top-0 absolute ">
        {/* Search Bar */}
        <div className="p-6 md:h-[15vh] h-[20vh]">
          <h1 className="text-2xl font-semibold text-gray-800 text-center">Search Videos</h1>
          <div className="mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Search competitions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border border-gray-300 py-2 px-4 w-full focus:outline-none"
            />
          </div>
        </div>

        {/* Results */}
        <div className="h-[60vh] md:h-[75vh] overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="relative">
              <table className="min-w-full table-auto border-collapse">
                <thead className="sticky top-0 bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm">Event</th>
                    <th className="py-3 px-4 text-left text-sm">Competition</th>
                    <th className="py-3 px-4 text-left text-sm">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((result, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="py-3 px-4 text-left">{result.event}</td>
                      <td className="py-3 px-4">
                        <div>{result.competition}</div>
                        <div className="text-sm text-gray-500">{result.date}</div>
                      </td>
                      <td className="py-3 px-4 text-left">{result.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto pt-5">
              <img src={Elie} alt="foto" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        {Nav}
      </div>



   
    </>
  );
};

export default Search;
