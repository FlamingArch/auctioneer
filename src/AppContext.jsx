import { createContext, useState } from "react";


import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import {
  Home2,
  DeviceDesktopAnalytics,
  CalendarStats,
  User,
  Settings,
  Wallet,
} from "tabler-icons-react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCQzMX4YlH5UpyHU9faojWK-U8vtasBWWE",
    authDomain: "f303-auctioneer.firebaseapp.com",
    projectId: "f303-auctioneer",
    storageBucket: "f303-auctioneer.appspot.com",
    messagingSenderId: "899394762304",
    appId: "1:899394762304:web:c3511387b09f65941f11a5",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [selectedPage, setSelectedPage] = useState(0);

  const navlinks = [
    { icon: Home2, label: "Home" },
    { icon: DeviceDesktopAnalytics, label: "Ongoing" },
    { icon: CalendarStats, label: "Past" },
    { icon: User, label: "Account" },
    { icon: Wallet, label: "Wallet" },
    { icon: Settings, label: "Settings" },
  ];

  const myTheme = {
    primaryColor: "blue",
  };

  const sampleBidData = {
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
  };

  return (
    <AppContext.Provider
      value={{
        app: app,
        db: db,
        selectedPage: selectedPage,
        setSelectedPage: setSelectedPage,
        navlinks: navlinks,
        sampleBidData: sampleBidData,
      }}
    >
      <ColorSchemeProvider>
        <MantineProvider theme={myTheme}>{children}</MantineProvider>
      </ColorSchemeProvider>
    </AppContext.Provider>
  );
};
