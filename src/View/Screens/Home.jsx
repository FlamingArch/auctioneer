import React, { useContext } from "react";
import { AppContext } from "../../Context";

import Banner from "../Supporting/Banner";
import Button from "../Supporting/ThemeButton";

const Home = () => {
  const { setNewVisible } = useContext(AppContext);

  const description =
    " Create a new auction and sell your items at hightest price, or look around our ongoing auctions to see something you may like.";

  return (
    <Page header="Home">
      <Banner headline="Welcome Back" description={description}>
        <Button style="white-light" onClick={() => setActive(1)}>
          BROWSE ONGOING AUCTIONS
        </Button>
        <Button style="white-filled" onClick={() => setNewVisible(true)}>
          Start new Auction
        </Button>
      </Banner>
    </Page>
  );
};

export default Home;
