import React, { useContext } from "react";

import Card from "../Supporting/AuctionCard";

import { AppContext } from "../../Context";
import Page from "../Supporting/Page";

const Ongoing = () => {
  const { sampleBidData: props } = useContext(AppContext);

  return (
    <Page header="Ongoing">
      <Card {...props} />
      <Card {...props} />
      <Card {...props} />
      <Card {...props} />
      <Card {...props} />
      <Card {...props} />
      <Card {...props} />
      <Card {...props} />
    </Page>
  );
};

export default Ongoing;
