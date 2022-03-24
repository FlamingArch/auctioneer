import React, { useContext } from "react";
import { AppContext } from "../../Context";
import Header from "../Supporting/Header";
import Card from "../Supporting/AuctionCard";
import { Group, ScrollArea } from "@mantine/core";

const Past = () => {
  const { sampleBidData: props } = useContext(AppContext);

  return (
    <div className="flex flex-col place-content-center">
      <Header>Past</Header>
      <ScrollArea
        style={{
          height: "100vh",
        }}
      >
        <Group spacing="lg" grow position="center" style={{ margin: "5rem auto" }}>
          <Card {...props} />
          <Card {...props} />
          <Card {...props} />
          <Card {...props} />
          <Card {...props} />
          <Card {...props} />
          <Card {...props} />
        </Group>
      </ScrollArea>
    </div>
  );
};

export default Past;
