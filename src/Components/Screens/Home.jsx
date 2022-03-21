import React from "react";
import Header from "../Views/Header";
import Banner from "../Views/Banner";
import Card from "../Views/AuctionCard";

const Home = () => {
  const props = {
    image:
      "https://unsplash.com/photos/JM5qCwvWgXw/download?ixid=MnwxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE2NDc4OTI4NDQ&force=true&w=1920",
    category: "Technology",
    title: "Surface Pro",
    footer: "Microsoft's response to iPad that sucks.",
    author: {
      name: "John Doe",
      description: "Seller",
      image:
        "https://unsplash.com/photos/HA5rQ_XfBD0/download?ixid=MnwxMjA3fDF8MXxhbGx8MTF8fHx8fHwyfHwxNjQ3ODkyODQ0&force=true&w=1920",
    },
  };

  return (
    <div className="flex flex-col">
      <Header>Home</Header>
      <Banner />
    </div>
  );
};

export default Home;
