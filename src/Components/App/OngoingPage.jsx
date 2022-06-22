import TopBar from "./TopBar";
import { useContext } from "react";
import { FirebaseContext } from "../Firebase";

const OngoingPage = () => {
  const { items } = useContext(FirebaseContext);

  return (
    <div className="content">
      <TopBar />
      {items.map((item) => (
        <div className="card">
          <h3>{item.name}</h3>
          {item.description}
        </div>
      ))}
    </div>
  );
};

export default OngoingPage;
