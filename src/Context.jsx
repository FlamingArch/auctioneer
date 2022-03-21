import { createContext, useState } from "react";
import { MantineProvider } from "@mantine/core";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [active, setActive] = useState(0);

  return (
    <AppContext.Provider
      value={{
        selectedPage: selectedPage,
        setSelectedPage: setSelectedPage,
        active: active,
        setActive: setActive,
      }}
    >
      <MantineProvider>{children}</MantineProvider>
    </AppContext.Provider>
  );
};
