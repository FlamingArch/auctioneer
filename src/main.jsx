import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.scss";

import { FirebaseProvider } from "./Firebase";
import { AppProvider } from "./Context";

// App Starts Here
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </AppProvider>
  </React.StrictMode>
);
