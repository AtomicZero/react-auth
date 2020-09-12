import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

export const Router = () => {
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

const Login = () => {
  return <h2>Login</h2>;
};

const Register = () => {
  return <h2>Register</h2>;
};

const Welcome = () => {
  return <h2>Welcome</h2>;
};
