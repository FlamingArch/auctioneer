import React from "react";

const Chip = ({ children }) => {
  return (
    <div className="px-3 py-1 bg-gray-200 rounded-full w-min h-min">
      {children}
    </div>
  );
};

export default Chip;
