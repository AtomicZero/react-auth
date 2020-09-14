import React, { useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import UserContext from "./UserContext";

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
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <HashRouter>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/welcome">
            {user.token ? (
              <Welcome />
            ) : (
              <UnauthorisedWrapper>
                <Login />
              </UnauthorisedWrapper>
            )}
          </Route>
          <Route exact path="/info" component={Info} />
        </Switch>
      </div>
    </HashRouter>
  );
};
