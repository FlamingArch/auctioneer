import React from "react";

import Header from "./Header";
import { Group, ScrollArea } from "@mantine/core";

const Page = ({ header, children }) => {
  return (
    <div className="flex flex-col">
      <Header>{header}</Header>
      <ScrollArea style={{ height: "100vh" }}>
        <Group
          spacing="lg"
          grow
          position="center"
          style={{ margin: "5rem auto" }}
        >
          {children}
        </Group>
      </ScrollArea>
    </div>
  );
};

export default Page;
