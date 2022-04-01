import React, { useContext } from "react";
import { AppContext } from "../../Context";

import Banner from "../Supporting/Banner";
import ThemeButton from "../Supporting/ThemeButton";
import Page from "../Supporting/Page";

const Home = () => {
  const { setNewVisible } = useContext(AppContext);

  const description =
    " Create a new auction and sell your items at hightest price, or look around our ongoing auctions to see something you may like.";

  return (
    <Page header="Home">
      <Banner headline="Welcome Back" description={description}>
        <ThemeButton style="white-light" onClick={() => setActive(1)}>
          BROWSE ONGOING AUCTIONS
        </ThemeButton>
        <ThemeButton style="white-filled" onClick={() => setNewVisible(true)}>
          Start new Auction
        </ThemeButton>
      </Banner>
    </Page>
  );
};

export default Home;
