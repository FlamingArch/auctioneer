import { useContext } from "react";

import SignInPage from "./components/App/SignIn";
import Page from "./views/Page.jsx";
import AppSidebar from "./components/App/Sidebar";

import AllPage from "./components/App/AllPage";
import OngoingPage from "./components/App/OngoingPage";
import FavouritesPage from "./components/App/FavouritesPage";
import AccountPage from "./components/App/AccountPage";
import WalletPage from "./components/App/WalletPage";

import { TabView, TabNavigationProvider } from "./views/TabNavigation.jsx";

import ItemPage from "./components/App/ItemPage";

import { FirebaseContext } from "./Firebase.jsx";
import { AppContext } from "./Context.jsx";
import AddPage from "./components/App/AddPage";

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
