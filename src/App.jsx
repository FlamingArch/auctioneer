import { ItemCard } from "./Components/Card";
import { MantineProvider } from "@mantine/core";
import sampleitem from "./Samples/Item";

function App() {
  const myTheme = {
    colorsScheme: "light",
    primaryColor: "red",
    defaultRadius: 0,
  };

  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
      <div className="w-screen h-screen grid overflow-scroll gap-6 grid-items">
        <ItemCard item={sampleitem} />
        <ItemCard item={sampleitem} />
        <ItemCard item={sampleitem} />
        <ItemCard item={sampleitem} />
      </div>
    </MantineProvider>
  );
}

export default App;
