import { useContext } from "react";

import SignInPage from "./routes/SignIn";
import Page from "./views/Page.jsx";
import AppSidebar from "./routes/Sidebar";

import AllPage from "./routes/AllPage";
import OngoingPage from "./routes/OngoingPage";
import FavouritesPage from "./routes/FavouritesPage";
import AccountPage from "./routes/AccountPage";
import WalletPage from "./routes/WalletPage";

import { TabView, TabNavigationProvider } from "./views/TabNavigation.jsx";

import ItemPage from "./routes/ItemPage";

import { FirebaseContext } from "./Components/Firebase.jsx";
import { AppContext } from "./Components/Context.jsx";
import AddPage from "./routes/AddPage";

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
