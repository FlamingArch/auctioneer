import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarVisibleMobile, setSidebarVisibleMobile] = useState(false);
  const [visibleAddItem, setVisibleAddItem] = useState(false);
  const [visibleItemPage, setVisibleItemPage] = useState(false);
  const [item, setItem] = useState(undefined);

  function showItemPage(item) {
    setItem(item);
    setVisibleItemPage(true);
  }

  return (
    <AppContext.Provider
      value={{
        sidebarVisibleMobile: sidebarVisibleMobile,
        setSidebarVisibleMobile: setSidebarVisibleMobile,
        visibleAddItem: visibleAddItem,
        setVisibleAddItem: setVisibleAddItem,
        visibleItemPage: visibleItemPage,
        setVisibleItemPage: setVisibleItemPage,
        showItemPage: showItemPage,
        item: item,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
