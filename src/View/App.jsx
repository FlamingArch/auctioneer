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

function App() {
  return (
    <AppProvider>
      <TabProvider>
        <AppShell
          style={Styles.appShellStyle}
          navbar={<NavBar />}
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
    </AppProvider>
  );
}
export default App;
