import React, { useContext } from "react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Avatar,
  useMantineTheme,
} from "@mantine/core";

import User from "../../Model/User";

import { UIContext } from "../../UIContext";

export default function AuctionCard({ item }) {
  const { styles } = useContext(UIContext);
  const { classes } = styles.auctionCardStyles();

  const theme = useMantineTheme();

  const features = item.tags.map((badge) => (
    <Badge color={theme.colorScheme === "dark" ? "dark" : "gray"} key={badge}>
      {badge}
    </Badge>
  ));

  return (
    <div style={{ width: "clamp(280px, 100%, 320px)" }}>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={item.image_urls[0]} alt={name} height={180} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text size="lg" weight={500}>
              {item.name}
            </Text>
            <Text color="red" size="lg" weight={500}>
              $ {item.initial_price}
            </Text>
          </Group>
          <Group position="apart">
            <Text size="sm" mt="xs">
              {item.description}
            </Text>
            <Badge size="sm" leftSection={item.category.emoji}>
              {item.category.label}
            </Badge>
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} color="dimmed">
            Seller
          </Text>
          <Group mt={5}>
            <Avatar
              src={User.getUser(item.author).profile_picture_url}
              size="md"
            />
            <Group direction="column" grow>
              <Text size="md" color="gray" weight={500}>
                {User.getUser(item.author).name}
                <Text size="sm" color="gray">
                  {User.getUser(item.author).bio}
                </Text>
              </Text>
            </Group>
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} color="dimmed">
            Tags
          </Text>
          <Group spacing={7} mt={5}>
            {features}
          </Group>
        </Card.Section>

        <Group mt="xs">
          <Button
            variant="subtle"
            color="blue"
            radius="md"
            uppercase
            style={{ flex: 1 }}
          >
            Place Bid
          </Button>
        </Group>
      </Card>
    </div>
  );
}
