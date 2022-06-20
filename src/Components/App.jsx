import { useState } from "react";

import {
  AddIcon,
  SignOutIcon,
  DarkModeOffIcon,
  OngoingIcon,
  CompletedIcon,
  FavouritesIcon,
  WalletIcon,
  AccountIcon,
} from "./Icons";

import Logo from "./Logo";
import Button from "./Views/Button";
import Sidebar from "./Views/Sidebar";
import Page from "./Views/Page";

import {
  TabNavigationContext,
  TabView,
  Tab,
  TabNavigationProvider,
} from "./Views/TabNavigation";

import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  getFirestore,
  orderBy,
  query,
  limit,
} from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1aAzCS-F1iAoRMUpPEuKKiIeygQJcAaw",
  authDomain: "fa-auctioneer.firebaseapp.com",
  projectId: "fa-auctioneer",
  storageBucket: "fa-auctioneer.appspot.com",
  messagingSenderId: "761574860951",
  appId: "1:761574860951:web:b5d271758d2742d62821d2",
};

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const [user] = useAuthState(auth);

  const itemsRef = collection(firestore, "items");
  const q = query(itemsRef, orderBy("createdAt", "desc"), limit(10));

  const [items] = useCollectionData(q, { idField: "id" });

  const addItem = () => {};

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function signOut() {
    return auth.currentUser && auth.signOut();
  }

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

  return user ? (
    <Page>
      <TabNavigationProvider>
        <Sidebar>
          <Logo />

          <Button type="primary" onClick={addItem}>
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
        <div className="content">
          <TabView>
            <div>Ongoing</div>
            <div>Completed</div>
            <div>Favourites</div>
            <div>Wallet</div>
            <div>Account</div>
          </TabView>
        </div>
      </TabNavigationProvider>
    </Page>
  ) : (
    <div className="window">
      <h1>Sign In</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default App;
