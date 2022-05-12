import { ItemCard } from "./Components/Card";
import PageGrid from "./Components/Grid";
import NavigationBar from "./Components/Navigation";
import sampleitem from "./Samples/Item";

function App() {
  return (
    <div className="grid appgrid w-screen">
      <NavigationBar />
      <PageGrid heading="Home">
        <ItemCard item={sampleitem} />
        <ItemCard item={sampleitem} />
        <ItemCard item={sampleitem} />
        <ItemCard item={sampleitem} />
      </PageGrid>
    </div>
  );
}

export default App;
