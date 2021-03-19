import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "./privateRoutes";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
      <PrivateRoutes
        path="/dashboard"
        component={Dashboard}
        role="ROLE_USER, ROLE_ADMIN"
      />
    </Switch>
  );
}
