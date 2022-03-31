import React, { useContext } from "react";
import { Button } from "@mantine/core";
import { AppContext } from "../../Context";

const Banner = () => {
  const { setActive } = useContext(AppContext);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://unsplash.com/photos/LLZl_UBAWc4/download?ixid=MnwxMjA3fDB8MXxhbGx8NTd8fHx8fHwyfHwxNjQ4NzM2ODUx&force=true&w=2400)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white rounded-xl text-sm border-gray-200 m-4 w-full bg-white shadow-2xl"
    >
      <div className="w-full flex flex-col justify-end p-8 border-gray-100 border-t">
        <h1 className="text-3xl font-medium mb-6">Welcome Back</h1>
        Create a new auction and sell your items at hightest price, or look
        around our ongoing auctions to see something you may like.
      </div>
      <div className="w-full flex justify-end p-8 border-gray-100 pt-0">
        <button
          className="ml-4 text-sm rounded-md uppercase font-medium bg-none  hover:bg-white hover:bg-opacity-30  text-white transition-all px-4 py-2"
          onClick={() => setActive(1)}
        >
          BROWSE ONGOING AUCTIONS
        </button>
        <button className="ml-4 text-sm rounded-md uppercase font-medium bg-white hover:text-white  hover:bg-blue-600  text-blue-500 transition-all px-4 py-2">
          Start new Auction
        </button>
      </div>
    </div>
  );
};

export default Banner;
