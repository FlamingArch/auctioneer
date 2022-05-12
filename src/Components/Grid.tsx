import React from "react";

const PageGrid = ({ children, heading }) => {
  return (
    <div className="flex flex-col overflow-scroll relative p-0">
      {heading && (
        <h1 className="text-3xl font-medium p-8 top-0 fixed z-50 backdrop-filter bg-white bg-opacity-80 backdrop-blur-xl w-full pb-4 m-0">
          {heading}
        </h1>
      )}
      <div className="w-auto h-screen grid gap-6 grid-items">
        {children}
      </div>
    </div>
  );
};

export default PageGrid;
