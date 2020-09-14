import React, { useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import { AppContext } from "./App";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";
import { Info } from "./pages/Info";

const UnauthorisedWrapper = (props) => {
  return (
    <div>
      <p>Please login before accessing the welcome page</p>
      {props.children}
    </div>
  );
};

export const Router = () => {
  const appContext = useContext(AppContext);
  const { user } = appContext;

  return (
    <HashRouter>
      <div>
        <Navbar />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/welcome">
            {user.token ? (
              <Welcome />
            ) : (
              <UnauthorisedWrapper>
                <Login />
              </UnauthorisedWrapper>
            )}
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};
