import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

import { MainRouter } from "./router/MainRouter";
import { UserProvider } from "./providers/UserProvider";
import { BgColorProvider } from "./providers/BgColorProvider";

export default function App() {
  return (
    <BgColorProvider>
      <UserProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </UserProvider>
    </BgColorProvider>
  );
}
