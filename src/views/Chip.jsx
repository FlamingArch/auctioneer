import React from "react";

const Chip = ({ children }) => {
  return (
    <div
      style={{ background: "#f2f3f5" }}
      className="px-3 py-1 rounded-lg w-fit h-min"
    >
      {children}
    </div>
  );
};

export default Chip;
