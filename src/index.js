import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataLayerProvider } from "./context/dataLayerContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DataLayerProvider>
      <App />
    </DataLayerProvider>
  </StrictMode>
);
