import { useContext } from "react";
import { UIContext } from "../../UIContext";

const TabView = ({ children }) => {
  const { active } = useContext(UIContext);

  return children[active];
};

export default TabView;
