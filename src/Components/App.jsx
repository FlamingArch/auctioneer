import { useContext } from "react";

import SignInPage from "./App/SignIn";
import Page from "./Views/Page";
import AppSidebar from "./App/Sidebar";

import OngoingPage from "./App/OngoingPage";
import CompletedPage from "./App/CompletedPage";
import FavouritesPage from "./App/FavouritesPage";
import AccountPage from "./App/AccountPage";
import WalletPage from "./App/WalletPage";

import { TabView, TabNavigationProvider } from "./Views/TabNavigation";

import { FirebaseContext } from "./Firebase.jsx";

function App() {
  const { user } = useContext(FirebaseContext);
  return user ? (
    <Page>
      <TabNavigationProvider>
        <AppSidebar />
        <TabView>
          <OngoingPage />
          <CompletedPage />
          <FavouritesPage />
          <WalletPage />
          <AccountPage />
        </TabView>
      </TabNavigationProvider>
    </Page>
  ) : (
    <SignInPage />
  );
}

export default App;
