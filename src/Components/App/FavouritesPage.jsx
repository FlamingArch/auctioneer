import React from "react";
import { SearchIcon } from "../Views/Icons";
import TopBar from "./TopBar";
import ilfav from "../../Resources/illutration-favorites.svg";

const FavouritesPage = () => {
  return (
    <div className="content">
      <TopBar />
      <div className="grid w-full h-full text-center place-content-center">
        <img src={ilfav} className="pb-12" />
        <div className="pb-6 text-6xl font-thin">Nothing here yet</div>
        <div className="">Items added to favorites will appear here .</div>
      </div>
    </div>
  );
};

export default FavouritesPage;
