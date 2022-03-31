import React, { useContext } from "react";

import Header from "../Supporting/Header";
import Banner from "../Supporting/Banner";
import { AppContext } from "../../Context";

import { Group, ScrollArea } from "@mantine/core";

const Home = () => {
  const { setNewVisible } = useContext(AppContext);

  const description =
    " Create a new auction and sell your items at hightest price, or look around our ongoing auctions to see something you may like.";

  const classesLightButton =
    "ml-4 text-sm rounded-md uppercase font-medium bg-none  hover:bg-white hover:bg-opacity-30  text-white transition-all px-4 py-2";
  const classesColorButton =
    "ml-4 text-sm rounded-md uppercase font-medium bg-white hover:text-white  hover:bg-blue-500  text-blue-500 transition-all px-4 py-2";

  return (
    <div className="flex flex-col">
      <Header>Home</Header>

      <ScrollArea
        style={{
          height: "100vh",
        }}
      >
        <Group
          spacing="lg"
          grow
          position="center"
          style={{ margin: "5rem auto" }}
        >
          <Banner headline="Welcome Back" description={description}>
            <button className={classesLightButton} onClick={() => setActive(1)}>
              BROWSE ONGOING AUCTIONS
            </button>
            <button
              className={classesColorButton}
              onClick={() => setNewVisible(true)}
            >
              Start new Auction
            </button>
          </Banner>
        </Group>
      </ScrollArea>
    </div>
  );
};

export default Home;
