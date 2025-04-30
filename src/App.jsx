import { useContext } from "react";

import SignInPage from "./routes/SignIn.jsx";
import Page from "./views/Page.jsx";
import AppSidebar from "./routes/Sidebar.jsx";

import AllPage from "./routes/AllPage.jsx";
import OngoingPage from "./routes/OngoingPage.jsx";
import FavouritesPage from "./routes/FavouritesPage.jsx";
import AccountPage from "./routes/AccountPage.jsx";
import WalletPage from "./routes/WalletPage.jsx";

import { TabView, TabNavigationProvider } from "./views/TabNavigation.jsx";

import ItemPage from "./routes/ItemPage.jsx";

import { FirebaseContext } from "./Firebase.jsx";
import { AppContext } from "./Context.jsx";
import AddPage from "./routes/AddPage.jsx";

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
