import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CSSReset from "./themes/CSSReset";
import GlobalStyle from "./themes/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CSSReset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
