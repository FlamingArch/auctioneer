import React from "react";
import { SearchIcon } from "../Views/Icons";

const CompletedPage = () => {
  return (
    <div className="content">
      <div className="center w-full">
        <div className="input">
          <SearchIcon />
          <input placeholder="Search Completed" />
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
