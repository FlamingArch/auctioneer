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
        <div className="w-screen h-screen grid place-content-center bg-blue-100 bg-opacity-25">
          <h1 className="m-6 text-3xl font-light">Sign in to Auctioneer</h1>
          <button
            onClick={signInGoogle}
            className="m-2 transition-all bg-blue-100 text-black hover:bg-blue-200 hover:text-black px-16 py-2 rounded-3xl shadow-none hover:shadow-none hover:rounded-md"
          >
            Sign in with Google
          </button>
          <button className="m-2 transition-all bg-blue-100 text-black hover:bg-blue-200 hover:text-black px-16 py-2 rounded-3xl shadow-none hover:shadow-none hover:rounded-md">
            Sign in with Email
          </button>
          <button className="m-2 transition-all bg-blue-100 text-black hover:bg-blue-200 hover:text-black px-16 py-2 rounded-3xl shadow-none hover:shadow-none hover:rounded-md">
            Sign in with Phone
          </button>
        </div>
      )}
    </AppProvider>
  );
}
export default App;
