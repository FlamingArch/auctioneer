import {
  OngoingIcon,
  CompletedIcon,
  FavouritesIcon,
  WalletIcon,
  AccountIcon,
} from "./views/Icons";

export const tabs = [
  {
    icon: <OngoingIcon />,
    label: "All",
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
