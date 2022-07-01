import { useContext } from "react";

import SignInPage from "./App/SignIn";
import Page from "./Views/Page";
import AppSidebar from "./App/Sidebar";

import AllPage from "./App/AllPage";
import OngoingPage from "./App/OngoingPage";
import FavouritesPage from "./App/FavouritesPage";
import AccountPage from "./App/AccountPage";
import WalletPage from "./App/WalletPage";

import { TabView, TabNavigationProvider } from "./Views/TabNavigation";

import ItemPage from "./App/ItemPage";

import { FirebaseContext } from "./Firebase.jsx";
import { AppContext } from "./Context";
import AddPage from "./App/AddPage";

import { AnimatePresence } from "framer-motion";

function App() {
  const {
    visibleAddItem,
    setVisibleAddItem,
    visibleItemPage,
    setVisibleItemPage,
  } = useContext(AppContext);
  const { user } = useContext(FirebaseContext);

  // If user is signed in, i.e. user is not null, then show the app
  // Otherwise, show the sign in page
  return user ? (
    <Page>
      <TabNavigationProvider>
        <AppSidebar />
        <TabView>
          <AllPage />
          <OngoingPage />
          <FavouritesPage />
          <WalletPage />
          <AccountPage />
        </TabView>
      </TabNavigationProvider>

      <AnimatePresence>
        {visibleAddItem && (
          <AddPage closeFunction={() => setVisibleAddItem(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visibleItemPage && (
          <ItemPage closeFunction={() => setVisibleItemPage(false)} />
        )}
      </AnimatePresence>
    </Page>
  ) : (
    <SignInPage />
  );
}

export default App;
