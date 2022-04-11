import { createContext, useState } from "react";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import Styles from "./View/Supporting/Styles";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [newVisible, setNewVisible] = useState(false);

  return (
    <AppContext.Provider
      value={{
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
