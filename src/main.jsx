import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

{/* 폰트 임포트 */ }
import "@fontsource-variable/inter";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/600.css";

import "./styles/global.css"; // 너의 글로벌 CSS


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
