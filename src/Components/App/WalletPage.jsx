import React from "react";
import { SearchIcon } from "../Views/Icons";

const WalletPage = () => {
  return (
    <div className="content">
      <div className="center w-full">
        <div className="input">
          <SearchIcon />
          <input placeholder="Search Wallet" />
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
