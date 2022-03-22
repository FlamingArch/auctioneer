import { AppShell } from "@mantine/core";
import { AppProvider } from "../Context";

import NavBar from "./Views/NavBar";
import TabView from "./Views/TabView";

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
      <AppShell navbar={<NavBar />} styles={getTheme}>
        <TabView />
      </AppShell>
    </AppProvider>
  );
}
export default App;
