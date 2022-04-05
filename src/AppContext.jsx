import { createContext, useState } from "react";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import Styles from "./View/Supporting/Styles";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [newVisible, setNewVisible] = useState(false);

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

  return (
    <AppContext.Provider
      value={{
        app: app,
        db: db,
        newVisible: newVisible,
        setNewVisible: setNewVisible,
      }}
    >
      <ColorSchemeProvider>
        <MantineProvider theme={Styles.myTheme}>{children}</MantineProvider>
      </ColorSchemeProvider>
    </AppContext.Provider>
  );
};
