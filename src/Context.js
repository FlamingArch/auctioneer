import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <AppContext.Provider
      value={{
        selectedPage: selectedPage,
        setSelectedPage: setSelectedPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
