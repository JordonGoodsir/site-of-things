import React from "react";
import { useGlobalState } from "../config/store" 
import { Link} from "react-router-dom";


const Nav = () => { 
  const { store, dispatch } = useGlobalState();
  const { toggled } = store; 

  const triggerTriangle = (event) => {
    const topLine = document.getElementsByClassName("menuLineTop")[0];
    const middleLine = document.getElementsByClassName("menuLineMiddle")[0];
    if (toggled === true) {
      dispatch({
        type: "setToggled",
        data: false,
      });
      topLine.classList.remove("menuLineTopAnmation");
      middleLine.classList.remove("menuLineMiddleAnmation");
    } else {
      dispatch({
        type: "setToggled",
        data: true,
      });
      topLine.classList.add("menuLineTopAnmation");
      middleLine.classList.add("menuLineMiddleAnmation");
    }
  };

  return (
    <div>
      <div class="navContainer"> 
        <Link to="/"><div class="logo">
        <h5>Random</h5>   
        <h5 class="logoBottom">Projects</h5>  
        </div></Link>

        <div class="hamburgerMenu" onClick={triggerTriangle}>
          <div class="menuLineTop"></div>
          <div class="menuLineMiddle"></div>
          <div class="menuLineBottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
