import React, { useContext } from "react";
import Header from "../Views/Header";
import Card from "../Views/AuctionCard";
import { Group, ScrollArea } from "@mantine/core";
import { AppContext } from "../../Context";

const Ongoing = () => {
  const { sampleBidData: props } = useContext(AppContext);

  return (
    <div className="flex flex-col place-content-center">
      <Header>Ongoing</Header>
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

export default Ongoing;
