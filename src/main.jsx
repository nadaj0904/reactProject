import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import "./styles/index_kong.css";

import App1 from "./App1.jsx"; /** 공미준 사이트 테스트 */
// import App from "./App.jsx"; /** 라이프 홈페이지 샘플코드 */
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App1 />
  </BrowserRouter>
);
