import React, { useContext } from "react";
import { Navbar, Center, Group, Tooltip, UnstyledButton } from "@mantine/core";
import { Logout, SwitchHorizontal, ThreeDCubeSphere } from "tabler-icons-react";
import ToggleTheme from "./ToggleTheme";
import { AppContext } from "../../AppContext";
import { UIContext } from "../../UIContext";

function NavbarLink({ icon: Icon, label, active, onClick }) {
  const context = useContext(AppContext);
  const { classes, cx } = useContext(UIContext).styles.navBarStyles();
  return (
    <Tooltip label={label} position="right" withArrow transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon />
      </UnstyledButton>
    </Tooltip>
  );
}

export default function NavbarMinimal() {
  const { navlinks } = useContext(AppContext);
  const { active, setActive } = useContext(UIContext);

  const links = navlinks.map((link, index) => (
    <NavbarLink
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
        <Group direction="column" align="center" spacing={0}>
          {links}
        </Group>
      </Navbar.Section>
      <Navbar.Section>
        <Group direction="column" align="center" spacing={0}>
          <ToggleTheme />
          <NavbarLink icon={SwitchHorizontal} label="Change account" />
          <NavbarLink icon={Logout} label="Logout" />
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}
