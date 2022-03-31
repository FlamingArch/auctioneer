import React, { useContext } from "react";
import { AppContext } from "../../Context";

const TabView = ({ children }) => {
  const context = useContext(AppContext);

  return children[context.active];
};

export default TabView;
