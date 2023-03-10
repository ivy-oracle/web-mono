import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@ivyoracle/ui/dist/style.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
