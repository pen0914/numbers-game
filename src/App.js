import "./styles.css";
import { BrowserRouter } from "react-router-dom";

import { MainRouter } from "./router/MainRouter";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </UserProvider>
  );
}
