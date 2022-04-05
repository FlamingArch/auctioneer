import { useState, useContext, createContext } from "react";
import { Group, Tooltip, UnstyledButton } from "@mantine/core";
import Styles from "./Styles";

export const TabView = ({ children }) => {
  const { active } = useContext(TabContext);

  return children[active];
};

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [active, setActive] = useState(0);

  return (
    <TabContext.Provider value={{ active: active, setActive: setActive }}>
      {children}
    </TabContext.Provider>
  );
};

export const TabBar = ({ children }) => {
  return (
    <Group direction="column" align="center" spacing={0}>
      {children}
    </Group>
  );
};

export function TabBarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = Styles.tabLinkStyles();

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
