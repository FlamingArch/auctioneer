import { AppShell } from "@mantine/core";
import { AppProvider } from "../Context";

import NavBar from "./Supporting/NavBar";
import TabView from "./Supporting/TabView";

const getTheme = (theme) => ({
  main: {
    primaryColor: "blue",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
});

function App() {
  return (
    <AppProvider>
      <AppShell
        style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
        navbar={<NavBar />}
        styles={getTheme}
      >
        <TabView />
      </AppShell>
    </AppProvider>
  );
}
export default App;
