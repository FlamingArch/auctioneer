import React, { useContext } from "react";

import Logo from "../Views/Logo";
import Button from "../Views/Button";
import Sidebar from "../Views/Sidebar";

import { AppContext } from "../Context";

import { Tab } from "../Views/TabNavigation";

import {
  AddIcon,
  SignOutIcon,
  DarkModeOffIcon,
  OngoingIcon,
  CompletedIcon,
  FavouritesIcon,
  WalletIcon,
  AccountIcon,
} from "../Views/Icons";
import { FirebaseContext } from "../Firebase";

const tabs = [
  {
    icon: <OngoingIcon />,
    label: "Ongoing",
  },
  {
    icon: <CompletedIcon />,
    label: "Completed",
  },
  {
    icon: <FavouritesIcon />,
    label: "Favourites",
  },
  {
    icon: <WalletIcon />,
    label: "Wallet",
  },
  {
    icon: <AccountIcon />,
    label: "Account",
  },
];

const AppSidebar = () => {
  const { signOut } = useContext(FirebaseContext);

  const { sidebarVisibleMobile } = useContext(AppContext);

  return (
    <Sidebar mobileVisible={sidebarVisibleMobile}>
      <Logo />

      <Button type="primary">
        <AddIcon /> New Bid
      </Button>

      <div className="flex-col expanded" style={{ gap: "10px" }}>
        {tabs.map(({ icon, label }, idx) => (
          <Tab page={idx} key={idx}>
            {icon} {label}
          </Tab>
        ))}
      </div>

      <div className="flex-row" style={{ gap: "8px" }}>
        <Button type="transparent left_align expanded">
          <DarkModeOffIcon />
          India
        </Button>
        <Button type="icon">
          <DarkModeOffIcon />
        </Button>
        <Button type="icon" onClick={signOut}>
          <SignOutIcon />
        </Button>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
