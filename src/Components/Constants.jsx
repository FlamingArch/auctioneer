import {
  OngoingIcon,
  CompletedIcon,
  FavouritesIcon,
  WalletIcon,
  AccountIcon,
} from "./Views/Icons";

export const tabs = [
  {
    icon: <CompletedIcon />,
    label: "All",
  },
  {
    icon: <OngoingIcon />,
    label: "Ongoing",
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
