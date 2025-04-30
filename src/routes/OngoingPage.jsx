import TopBar from "./TopBar";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { FirebaseContext } from "../Firebase";

const CompletedPage = () => {
  const { user, items } = useContext(FirebaseContext);

  return (
    <div className="content">
      <TopBar />
      <div className="flex flex-col h-screen overflow-scroll">
        <p className="font-bold">Won Auctions</p>
        <div className="grid h-screen gap-4 p-10 overflow-scroll main-grid">
          {items && items.length !== 0 ? (
            items.map((item, i) =>
              item.sold && item.sold === user.uid ? (
                <ItemCard key={i} item={item} index={i} />
              ) : null
            )
          ) : (
            <p>No Auctions Won Yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
