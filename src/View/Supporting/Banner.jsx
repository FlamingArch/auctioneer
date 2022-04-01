import React, { useContext } from "react";
import { Button } from "@mantine/core";
import { AppContext } from "../../Context";

const Banner = ({ children, headline, description }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://unsplash.com/photos/LLZl_UBAWc4/download?ixid=MnwxMjA3fDB8MXxhbGx8NTd8fHx8fHwyfHwxNjQ4NzM2ODUx&force=true&w=2400)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white rounded-xl text-sm border-gray-200 m-4 w-full bg-black shadow-2xl"
    >
      <div className="w-full flex flex-col justify-end p-8 border-gray-100 border-t">
        <h1 className="text-3xl font-medium mb-6">{headline}</h1>
        {description}
      </div>
      <div className="w-full flex justify-end p-8 border-gray-100 pt-0">
        {children}
      </div>
    </div>
  );
};

export default Banner;
