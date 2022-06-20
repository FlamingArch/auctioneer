import { useContext } from "react";

import SignInPage from "./Pages/SignIn";
import Page from "./Views/Page";
import AppSidebar from "./App/Sidebar";

import { TabView, TabNavigationProvider } from "./Views/TabNavigation";

import { FirebaseContext } from "./Firebase.jsx";

function App() {
  const { user } = useContext(FirebaseContext);
  return user ? (
    <Page>
      <TabNavigationProvider>
        <AppSidebar />
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
    <SignInPage />
  );
}

export default App;
