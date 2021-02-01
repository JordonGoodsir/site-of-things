import stateReducer from "./config/stateReducer";
import { StateContext } from "./config/store";  
import { BrowserRouter, Route } from "react-router-dom";  
import React, { useReducer } from "react";

import Home from "./pages/Home"  




function App() { 
  const [store, dispatch] = useReducer(stateReducer, "");
  return (
    <div>   
      <StateContext.Provider value={{ store, dispatch }}>
        <BrowserRouter>
                  <Route exact path="/home" component={Home} />
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

export default App;
