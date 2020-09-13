import React, { createContext } from "react";
import { Router } from "../Router";

export const AppContext = createContext();

const initialState = { user: null };

export const App = () => {
  return (
    <AppContext.Provider value={initialState}>
      <Router />
    </AppContext.Provider>
  );
};
