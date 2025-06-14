import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./Layout/App.tsx";

import "./style/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
