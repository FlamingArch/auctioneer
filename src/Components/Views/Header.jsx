import React from "react";

const Header = (props) => {
  return (
    <div className="text-2xl p-1 pb-6 font-medium text-gray-800">
      {props.children}
    </div>
  );
};

export default Header;
