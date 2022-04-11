import React, { useContext } from "react";
import { Navbar, Center, Group } from "@mantine/core";

import {
  Home2,
  DeviceDesktopAnalytics,
  CalendarStats,
  User,
  Settings,
  Wallet,
  Logout,
  SwitchHorizontal,
  ThreeDCubeSphere,
  MoonStars,
} from "tabler-icons-react";

import ToggleTheme from "./ToggleTheme";
import { TabBar, TabContext, TabBarLink } from "./TabView";

const navlinks = [
  { icon: Home2, label: "Home" },
  { icon: DeviceDesktopAnalytics, label: "Ongoing" },
  { icon: CalendarStats, label: "Past" },
  { icon: User, label: "Account" },
  { icon: Wallet, label: "Wallet" },
  { icon: Settings, label: "Settings" },
];

export default function NavbarMinimal({ signout }) {
  const { active, setActive } = useContext(TabContext);

  const links = navlinks.map((link, index) => (
    <TabBarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar width={{ base: 80 }} p="md">
      <Center>
        <ThreeDCubeSphere color="#FF0000" size={40} strokeWidth={1.2} />
      </Center>
      <Navbar.Section grow mt={50}>
        <TabBar>{links}</TabBar>
      </Navbar.Section>
      <Navbar.Section>
        <Group direction="column" align="center" spacing={0}>
          <TabBarLink icon={MoonStars} label="Change Theme" />
          <TabBarLink icon={Logout} onClick={signout} label="Sign Out" />
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}
