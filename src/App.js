import stateReducer  from "./config/stateReducer";
import { StateContext } from "./config/store";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useReducer } from "react";

import "./styles/styles.scss";
import HomeController from "./pages/Home/HomeController";
import Nav from "./components/Nav";  
import Wheel from "./pages/Wheel/wheel" 
import notsAndCrosses from "./pages/notsAndCrosses/notsAndCrosses"   
import HomeMenu from "./pages/Home/HomeMenu"  
import Story from "./pages/story/story.js"





function App() {
  const initialState = {
    toggled: false, 
    storyMenuStatus:false
  };

  const [store, dispatch] = useReducer(stateReducer, initialState);  
  const { toggled } = store;  

  return (
    <div class="allPages">
      <StateContext.Provider value={{ store, dispatch }}> 
     
      
        <BrowserRouter> 
        <Nav /> 
        {toggled ? <HomeMenu/> :  
        <>
          <Route exact path="/" component={HomeController} />  
          <Route exact path="/wheel" component={Wheel} />  
          <Route exact path="/knotsAndCrosses" component={notsAndCrosses} />    
          <Route exact path="/story" component={Story} />   

          </>
        }
        </BrowserRouter> 
        
      </StateContext.Provider>
    </div>
  );
}

export default App;
