import React from "react";

const Container = ({ children, nav }) => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <div
        className="bg-gray-50 w-full overflow-y-auto"
        style={{ height: "90vh", maxWidth: "540px" }}
      >
        {children}
      </div>
      <div
        className="bg-white w-full border-b border-gray-300 flex-shrink-0"
        style={{ height: "10vh", maxWidth: "540px" }}
      >
        {nav}
      </div>
    </div>
  );
};

export default Container;
