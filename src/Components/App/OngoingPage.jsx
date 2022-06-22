import TopBar from "./TopBar";
import { useContext } from "react";
import { FirebaseContext } from "../Firebase";

const OngoingPage = () => {
  const { items } = useContext(FirebaseContext);

  return (
    <div className="content">
      <TopBar />
      {items &&
        items.map((item, idx) => (
          <div className="card" key={idx}>
            <h3>{item.name}</h3>
            {item.description}
          </div>
        ))}
    </div>
  );
};

export default OngoingPage;
