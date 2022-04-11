import { createStyles } from "@mantine/core";

const Styles = {
  getTheme: (theme) => ({
    main: {
      primaryColor: "blue",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  }),

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

  tabLinkStyles: createStyles((theme) => ({
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
  appShellStyle: { height: "100vh", width: "100vw", overflow: "hidden" },

  myTheme: {
    primaryColor: "blue",
  },

  bidData: {
    image:
      "https://unsplash.com/photos/JM5qCwvWgXw/download?ixid=MnwxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE2NDc4OTI4NDQ&force=true&w=1920",
    title: "Surface Pro",
    description: "Microsoft's response to iPad that sucks.",
    category: {
      label: "Technology",
      emoji: "💻",
    },
    tags: [
      "Technology",
      "Microsoft",
      "Surface",
      "Microsoft1",
      "Surface1",
      "Microsoft2",
      "Surface2",
      "Microsoft3",
      "Surface3",
    ],
    current_price: 12.99,
    author: {
      name: "John Doe",
      description: "Seller",
      image:
        "https://unsplash.com/photos/HA5rQ_XfBD0/download?ixid=MnwxMjA3fDF8MXxhbGx8MTF8fHx8fHwyfHwxNjQ3ODkyODQ0&force=true&w=1920",
    },
  },
  materialYouButton:
    "m-2 flex place-items-center transition-all bg-blue-100 text-black hover:bg-blue-200 hover:text-black px-16 py-2 rounded-3xl shadow-none hover:shadow-none hover:rounded-md",
};

export default Styles;
