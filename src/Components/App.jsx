import { AppShell } from "@mantine/core";
import { AppProvider } from "../Context";

import NavBar from "./Navigation";
import TabView from "./TabView";

const getTheme = (theme) => ({
  main: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
});

function App() {
  return (
    <AppProvider>
      <AppShell padding="md" navbar={<NavBar />} styles={getTheme}>
        <TabView />
      </AppShell>
    </AppProvider>
  );
}
export default App;
