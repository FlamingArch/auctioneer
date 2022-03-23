import React, { useContext } from "react";
import { Heart, Section } from "tabler-icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  Avatar,
  useMantineTheme,
} from "@mantine/core";
import { AppContext } from "../../Context";

export default function AuctionCard({
  image,
  title,
  current_price,
  description,
  category,
  tags,
  author,
}) {
  const { auctionCardStyles } = useContext(AppContext);
  const { classes } = auctionCardStyles();

  const theme = useMantineTheme();

  const features = tags.map((badge) => (
    <Badge color={theme.colorScheme === "dark" ? "dark" : "gray"} key={badge}>
      {badge}
    </Badge>
  ));

  return (
    <div style={{ width: "clamp(280px, 100%, 320px)" }}>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={180} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text size="lg" weight={500}>
              {title}
            </Text>
            <Text color="red" size="lg" weight={500}>
              $ {current_price}
            </Text>
          </Group>
          <Group position="apart">
            <Text size="sm" mt="xs">
              {description}
            </Text>
            <Badge size="sm" leftSection={category.emoji}>
              {category.label}
            </Badge>
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} color="dimmed">
            Author
          </Text>
          <Group mt={5}>
            <Avatar src={author.image} size="md" />
            <Group direction="column" grow>
              <Text size="md" color="gray" weight={500}>
                {author.name}
                <Text size="sm" color="gray">
                  {author.description}
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
