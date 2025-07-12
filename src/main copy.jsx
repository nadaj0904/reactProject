import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/index_kong.css";
// import App from './App.jsx'

// import App3 from "./App3.jsx";
import App4 from "./App4.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App4 />
  </StrictMode>
);
