import stateReducer  from "./config/stateReducer";
import { StateContext } from "./config/store";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useReducer } from "react";

import "./styles/styles.scss";
import HomeController from "./pages/Home/HomeController";
import Nav from "./components/Nav";

function App() {
  const initialState = {
    toggled: false,
  };

  const [store, dispatch] = useReducer(stateReducer, initialState); 

  return (
    <div class="allPages">
      <StateContext.Provider value={{ store, dispatch }}>
        <BrowserRouter> 
        <Nav />
          <Route exact path="/" component={HomeController} />
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

export default App;
