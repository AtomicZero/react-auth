import React, { useContext } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { AppContext } from "./App/App";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import { Welcome } from "./Welcome/Welcome";

export const Router = () => {
  const appContext = useContext(AppContext);
  const { user } = appContext;

  console.log(user);

  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/welcome">welcome</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};
