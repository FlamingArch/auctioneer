import { AppShell } from "@mantine/core";
import { AppProvider } from "../Context";

import NavBar from "./Supporting/NavBar";
import TabView from "./Supporting/TabView";

import Home from "../View/Screens/Home";
import Ongoing from "../View/Screens/Ongoing";
import Past from "../View/Screens/Past";
import Profile from "../View/Screens/Profile";
import Settings from "../View/Screens/Settings";
import Wallet from "../View/Screens/Wallet";

const getTheme = (theme) => ({
  main: {
    primaryColor: "blue",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
});

const appShellStype = { height: "100vh", width: "100vw", overflow: "hidden" };

function App() {
  return (
    <AppProvider>
      <AppShell style={appShellStype} navbar={<NavBar />} styles={getTheme}>
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
    </AppProvider>
  );
}
export default App;
