import React, { useContext } from "react";
import { AppContext } from "../../Context";

import Home from "../Screens/Home";
import Ongoing from "../Screens/Ongoing";
import Past from "../Screens/Past";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import Wallet from "../Screens/Wallet";

const TabView = () => {
  const context = useContext(AppContext);

  switch (context.active) {
    case 0:
      return <Home></Home>;
    case 1:
      return <Ongoing></Ongoing>;
    case 2:
      return <Past></Past>;
    case 3:
      return <Profile></Profile>;
    case 4:
      return <Settings></Settings>;
    case 5:
      return <Wallet></Wallet>;
    default:
      return <Home></Home>;
  }
};

export default TabView;
