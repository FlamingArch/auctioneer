import { MantineProvider, AppShell } from "@mantine/core";

import NavBar from "./Navigation";

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
    <MantineProvider>
      <AppShell padding="md" navbar={<NavBar />} styles={getTheme}></AppShell>
    </MantineProvider>
  );
}
export default App;
