import { Switch, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";

export const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
  );
};
