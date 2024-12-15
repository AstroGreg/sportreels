import React from "react";


const EventHeader = ({ name }: { name: string }) => (
    <div
      className="flex items-center justify-between py-2 text-gray-700 transition-colors border-b border-gray-200 cursor-pointer hover:bg-gray-100"
      onClick={() => console.log("Expand this onderdeel if needed")}
    >
      <span className="font-medium">{name}</span>
    </div>
  );

export { EventHeader }