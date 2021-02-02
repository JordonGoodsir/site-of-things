import stateReducer from "./config/stateReducer";
import { StateContext } from "./config/store";  
import { BrowserRouter, Route } from "react-router-dom";  
import React, { useReducer } from "react";

import "./styles/styles.scss"
import Home from "./pages/Home"   
import Nav from "./components/Nav"




function App() { 
  const [store, dispatch] = useReducer(stateReducer, "");
  return (
    <div class="allPages">    
      <Nav/>
      <StateContext.Provider value={{ store, dispatch }}>
        <BrowserRouter>
                  <Route exact path="/" component={Home} />
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

export default App;
