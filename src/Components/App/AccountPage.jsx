import React from "react";
import { SearchIcon } from "../Views/Icons";

const AccountPage = () => {
  return (
    <div className="content">
      <div className="center w-full">
        <div className="center w-full">
          <div className="input">
            <SearchIcon />
            <input placeholder="Search Account" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
