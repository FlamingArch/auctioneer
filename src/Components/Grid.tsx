import React from "react";

const PageGrid = ({ children }) => {
  return (
    <div className="w-screen h-screen grid overflow-scroll gap-6 grid-items">
      {children}
    </div>
  );
};

export default PageGrid;
