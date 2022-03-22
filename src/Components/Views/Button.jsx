import React from "react";
import { Button, Tooltip } from "@mantine/core";

export default function ThemeButton(props) {
  return (
    <Tooltip
      label={props.tooltip}
      gutter={5}
      placement="center"
      position="bottom"
      radius="xl"
      transition="slide-down"
      transitionDuration={200}
    >
      <Button
        variant="light"
        rightIcon={props.icon}
        radius="md"
        size="md"
        styles={{
          root: { paddingRight: 14, height: 48 },
          rightIcon: { marginLeft: 22 },
        }}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </Tooltip>
  );
}
