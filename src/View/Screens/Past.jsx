import React, { useContext } from "react";
import { AppContext } from "../../Context";
import Header from "../Supporting/Header";
import Card from "../Supporting/AuctionCard";
import { Group, ScrollArea } from "@mantine/core";
import Page from "../Supporting/Page";

const Past = () => {
  const { sampleBidData: props } = useContext(AppContext);

  return (
    <Page header="Past">
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

export default Past;
