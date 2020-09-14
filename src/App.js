import React, { useState } from "react";
import { Router } from "./Router";
import UserContext from "./UserContext";

export const App = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router />
    </UserContext.Provider>
  );
};
