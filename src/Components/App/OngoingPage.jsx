import React from "react";
import { SearchIcon } from "../Views/Icons";

const OngoingPage = () => {
  return (
    <div className="content">
      <div className="center w-full">
        <div className="input">
          <SearchIcon />
          <input placeholder="Search Ongoing" />
        </div>
      </div>
    </div>
  );
};

export default OngoingPage;
