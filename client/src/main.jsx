import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CSSReset from "./themes/CSSReset";
import GlobalStyle from "./themes/GlobalStyle";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CSSReset />
      <GlobalStyle />
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
