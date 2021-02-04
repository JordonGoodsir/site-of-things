import React, { useEffect } from "react";

const Home = () => { 


  const randTriangeStyleTop = {
    height: `${Math.floor(Math.random() * 5 + 1)}em`,
    width: Math.floor(Math.random() * 5 + 1) + "em",
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    animationDelay: `${Math.floor(Math.random() * 3 + 1)}s`,
    animationDuration: "21s",
    zIndex: 1,
    top: "30%",
    animationName:"spin",
    animationIterationCount: "infinite", 
    transitionTimingFunction: "linear"
  }; 

  const randTriangeStyleBottom = {
    height: `${Math.floor(Math.random() * 5 + 1)}em`,
    width: Math.floor(Math.random() * 5 + 1) + "em",
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    animationDelay: `${Math.floor(Math.random() * 3 + 1)}s`,
    animationDuration: "21s",
    zIndex: 1,
    top: "80%",
    animationName:"otherWay",
    animationIterationCount: "infinite", 
    transitionTimingFunction: "linear"
  };

  return (
    <div class="homeMainHeading">
      <div class="logo">
        <h1>Random</h1>
        <h1 class="logoBottom">Projects</h1>
      </div>
      <div id="triangleContainer">
        <li style={randTriangeStyleTop}></li>
        <li style={randTriangeStyleTop}></li>
        <li style={randTriangeStyleTop}></li>
        <li style={randTriangeStyleBottom}></li>
        <li style={randTriangeStyleBottom}></li>
        <li style={randTriangeStyleBottom}></li>
        {[...Array(20).keys()].map((v, i) => {
          return (
            <li
              style={{
                height: `${Math.floor(Math.random() * 5 + 1)}em`,
                width: Math.floor(Math.random() * 5 + 1) + "em",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                animationDelay: `${Math.floor(Math.random() * 21 + 1)}s`,
                animationDuration: "21s",
                zIndex: 1,
                top: v % 2 === 0 ? "30%" : "80%",
                animationName: v % 2 === 0 ? "spin" : "otherWay",
                animationIterationCount: "infinite", 
                transitionTimingFunction: "linear"
              }}
            ></li>
          );
        })}
      </div>
    </div>
  );
};

// idea
// have a state that shows if the hamburger menu is open or not

export default Home;
