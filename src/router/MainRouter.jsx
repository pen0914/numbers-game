import { Route, Routes } from "react-router-dom";
import { Main } from "../components/pages/Main";
import { Login } from "../components/pages/Login";

export const MainRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};
