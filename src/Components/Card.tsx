import React from "react";
import { Heart } from "tabler-icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  useMantineTheme,
} from "@mantine/core";

import Item from "../Model/Item";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: "min-content",
    transition: "box-shadow 0.1s ease-in-out, scale 0.1s ease-in-out",
    ":hover": {
      boxShadow: "0px 12px 60px rgba(0, 0, 0, 0.24)",
      // translate: "0px -5px",
      scale: "1.025",
    },
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.white,
  },

  like_active: {
    color: theme.colors.pink[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const features = item.tags.map((badge) => (
    <Badge color={theme.colorScheme === "dark" ? "dark" : "gray"} key={badge}>
      {badge}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={item.image_urls[0]} alt={item.name} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {item.name}
          </Text>
          <Badge size="sm">
            {item.category.emoji + " " + item.category.label}
          </Badge>
        </Group>
        <Text size="sm" mt="xs">
          {item.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }} disabled={!item.active}>
          {item.active ? "Bid" : "Sold"}
        </Button>
        <ActionIcon
          variant="default"
          radius="md"
          size={36}
          onClick={item.toggleBookmark}
        >
          <Heart
            size={18}
            className={item.bookmark ? classes.like_active : classes.like}
          />
        </ActionIcon>
      </Group>
    </Card>
  );
}
