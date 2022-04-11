import { AppShell } from "@mantine/core";
import { AppProvider } from "../AppContext";

import NavBar from "./Supporting/NavBar";
import { TabView, TabProvider } from "./Supporting/TabView";

import Home from "../View/Screens/Home";
import Ongoing from "../View/Screens/Ongoing";
import Past from "../View/Screens/Past";
import Profile from "../View/Screens/Profile";
import Settings from "../View/Screens/Settings";
import Wallet from "../View/Screens/Wallet";
import SignIn from "./Screens/SignIn";
import Styles from "./Supporting/Styles";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCQzMX4YlH5UpyHU9faojWK-U8vtasBWWE",
    authDomain: "f303-auctioneer.firebaseapp.com",
    projectId: "f303-auctioneer",
    storageBucket: "f303-auctioneer.appspot.com",
    messagingSenderId: "899394762304",
    appId: "1:899394762304:web:c3511387b09f65941f11a5",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const [user] = useAuthState(auth);

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <AppProvider>
      {user ? (
        <TabProvider>
          <AppShell
            style={Styles.appShellStyle}
            navbar={<NavBar signout={signOut} />}
            styles={Styles.getTheme}
          >
            <TabView>
              <Home />
              <Ongoing />
              <Past />
              <Profile />
              <Settings />
              <Wallet />
              <Home />
            </TabView>
          </AppShell>
        </TabProvider>
      ) : (
        <SignIn signInGoogle={signInGoogle} />
      )}
    </AppProvider>
  );
}
export default App;
