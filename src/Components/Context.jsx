import React, { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarVisibleMobile, setSidebarVisibleMobile] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        sidebarVisibleMobile: sidebarVisibleMobile,
        setSidebarVisibleMobile: setSidebarVisibleMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
