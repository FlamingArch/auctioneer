import React from "react";

const Header = (props) => {
  return (
    <div
      className="text-xl p-6 font-medium text-gray-800 fixed z-50 backdrop-filter backdrop-blur-xl top-0 left-0 w-screen bg-white bg-opacity-60 border border-gray-200"
      style={{ paddingLeft: "6.5rem" }}
    >
      {props.children}
    </div>
  );
};

export default Header;
