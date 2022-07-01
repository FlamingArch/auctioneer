import TopBar from "./TopBar";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { FirebaseContext } from "../Firebase";

const CompletedPage = () => {
  const { user, items } = useContext(FirebaseContext);

  return (
    <div className="content">
      <TopBar />
      <p className="font-bold">Won Auctions</p>
      <div className="grid gap-4 p-10 main-grid">
        {items &&
          items.map((item, i) =>
            !item.active && item.bids[item.bids.length - 1].user == user.id ? (
              <ItemCard key={i} item={item} index={i} />
            ) : null
          )}
      </div>
      <p className="font-bold">My Auctions</p>
      <div className="grid gap-4 p-10 main-grid">
        {items &&
          items.map((item, i) =>
            !item.active && item.owner.uid == user.id ? (
              <ItemCard key={i} item={item} index={i} />
            ) : null
          )}
      </div>
    </div>
  );
};

export default CompletedPage;
