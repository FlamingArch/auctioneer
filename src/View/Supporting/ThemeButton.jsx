import React from "react";

const ThemeButton = ({ children, style, onClick }) => {
  function getClassName(style) {
    switch (style) {
      case "white-filled":
        return "ml-4 text-sm rounded-md uppercase font-medium bg-white hover:text-white  hover:bg-blue-500  text-blue-500 transition-all px-4 py-2";
      case "white-light":
        return "ml-4 text-sm rounded-md uppercase font-medium bg-none  hover:bg-white hover:bg-opacity-30  text-white transition-all px-4 py-2";
      case "filled":
        return "ml-4 text-sm rounded-md uppercase font-medium bg-blue-500 hover:text-white  hover:bg-blue-600  text-white transition-all px-4 py-2";
      case "light":
        return "ml-4 text-sm rounded-md uppercase font-medium bg-none  hover:bg-blue-400 hover:bg-opacity-30  text-white transition-all px-4 py-2";
      default:
        return "ml-4 text-sm rounded-md uppercase font-medium bg-none  hover:bg-white hover:bg-opacity-30  text-white transition-all px-4 py-2";
    }
  }

  return (
    <button key={0} className={getClassName(style)} onClick={onClick}>
      {children}
    </button>
  );
};

export default ThemeButton;
