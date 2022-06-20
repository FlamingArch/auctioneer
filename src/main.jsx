import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./index.scss";

import { FirebaseProvider } from "./Components/Firebase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);
