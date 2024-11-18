import React, { useState } from "react";

const availableEvents = [
  "100m",
  "200m",
  "400m",
  "800m",
  "1500m",
  "3000m steeple",
  "5000m",
  "10km",
  "Marathon",
  "Cross Country",
  "4x100m",
  "4x400m",
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [preferredEvents, setPreferredEvents] = useState([]);
  const [username, setUsername] = useState("User123");
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [club, setClub] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [nationality, setNationality] = useState("");

  const toggleEvent = (event) => {
    if (preferredEvents.includes(event)) {
      setPreferredEvents(preferredEvents.filter((e) => e !== event));
    } else {
      setPreferredEvents([...preferredEvents, event]);
    }
  };

  const saveChanges = () => {
    alert("Your changes have been saved!");
    // Handle API call to save changes
  };

  return (
    <div className="flex flex-col bg-gray-100">
      {/* Navigation */}
      <div className="flex justify-around bg-white border-b border-gray-300">
        <button
          className={`p-4 text-sm ${
            activeTab === "events" ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>
        <button
          className={`p-4 text-sm ${
            activeTab === "account" ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("account")}
        >
          Account
        </button>
        <button
          className={`p-4 text-sm ${
            activeTab === "info" ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("info")}
        >
          Info
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Preferred Events */}
        {activeTab === "events" && (
          <div>
            <h1 className="text-xl font-bold mb-4">Select Preferred Events</h1>
            <div className="grid grid-cols-2 gap-4">
              {availableEvents.map((event) => (
                <button
                  key={event}
                  className={`py-2 px-4 border rounded text-sm ${
                    preferredEvents.includes(event)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => toggleEvent(event)}
                >
                  {event}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Account Details */}
        {activeTab === "account" && (
          <div>
            <h1 className="text-xl font-bold mb-4">Account Details</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Change password"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
          </div>
        )}

        {/* Personal Info */}
        {activeTab === "info" && (
          <div>
            <h1 className="text-xl font-bold mb-4">Personal Info</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium">Club</label>
              <input
                type="text"
                value={club}
                onChange={(e) => setClub(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Birthdate</label>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Nationality</label>
              <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="p-4 bg-white border-t border-gray-300">
        <button
          onClick={saveChanges}
          className="w-full py-2 bg-blue-500 text-white font-medium rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Menu;
