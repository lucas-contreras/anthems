import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouteProvider } from "./AppRouteProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouteProvider />
  </React.StrictMode>
);
