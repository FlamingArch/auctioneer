import React from "react";

const ThemeButton = ({ children, style, onClick, className }) => {
  function getClassName(style) {
    switch (style) {
      case "white-filled":
        return "m-2 px-4 py-2 flex place-content-center text-sm rounded-md uppercase font-medium bg-white hover:text-white  hover:bg-blue-500  text-blue-500 transition-all px-4 py-2";
      case "white-light":
        return "m-2 px-4 py-2 flex place-content-center text-sm rounded-md uppercase font-medium bg-none  hover:bg-white hover:bg-opacity-30  text-white transition-all px-4 py-2";
      case "filled":
        return "m-2 px-4 py-2 flex place-content-center text-sm rounded-md uppercase font-medium bg-blue-500 hover:text-white  hover:bg-blue-600  text-white transition-all px-4 py-2";
      case "light":
        return "m-2 px-4 py-2 flex place-content-center text-sm rounded-md uppercase font-medium bg-none  hover:bg-blue-400 hover:bg-opacity-30  text-white transition-all px-4 py-2";
      case "filled-textblack":
        return "m-2 px-4 py-2 flex place-content-center text-sm rounded-md uppercase font-medium bg-blue-500 hover:text-white  hover:bg-blue-600  text-black transition-all px-4 py-2";
      case "light-textblack":
        return "m-2 px-4 py-2 flex place-content-center text-sm rounded-md uppercase font-medium bg-none  hover:bg-blue-400 hover:bg-opacity-30  text-black transition-all px-4 py-2";
      default:
        return "m-2 px-4 py-2 flex place-content-center text-sm rounded-md uppercase font-medium bg-none  hover:bg-white hover:bg-opacity-30  text-white transition-all px-4 py-2";
    }
  }

  return (
    <button
      key={0}
      className={getClassName(style) + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
