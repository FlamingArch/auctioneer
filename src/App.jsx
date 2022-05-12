import { ItemCard } from "./Components/Card";
import PageGrid from "./Components/Grid";
import sampleitem from "./Samples/Item";

function App() {
  return (
    <PageGrid>
      <ItemCard item={sampleitem} />
      <ItemCard item={sampleitem} />
      <ItemCard item={sampleitem} />
      <ItemCard item={sampleitem} />
    </PageGrid>
  );
}

export default App;
