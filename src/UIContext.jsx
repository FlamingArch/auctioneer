import { createContext, useState } from "react";
import { createStyles } from "@mantine/core";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [newVisible, setNewVisible] = useState(false);
  const [active, setActive] = useState(0);

  const styles = {
    auctionCardStyles: createStyles((theme) => ({
      card: {
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      },

      section: {
        borderBottom: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[3]
        }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
      },

      like: {
        color: theme.colors.red[6],
      },

      label: {
        textTransform: "uppercase",
        fontSize: theme.fontSizes.xs,
        fontWeight: 700,
      },
    })),

    navBarStyles: createStyles((theme) => ({
      link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[0]
            : theme.colors.gray[7],

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
        },
      },

      active: {
        "&, &:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
              : theme.colors[theme.primaryColor][0],
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 4 : 7
            ],
        },
      },
    })),
  };

  return (
    <UIContext.Provider
      value={{
        newVisible: newVisible,
        setNewVisible: setNewVisible,
        active: active,
        setActive: setActive,
        styles: styles,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
