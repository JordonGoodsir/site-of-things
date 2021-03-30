
import React, { useState } from 'react';

const Board = () => {
    
    const board = [ 
    ["-","-","-","-","-"],    
    ["|"," ","|"," ","|"," ","|" ], 
    ["-","-","-","-","-"],
    ["|", " ","|"," ","|"," ","|" ], 
    ["-","-","-","-","-"], 
    ["| ", " ","|"," ","|"," ","|"  ],  
    ["-","-","-","-","-"]
    ]   

    const [player1, setPlayer1] = useState(true) 

    const turn = (event) =>{  
      event.preventDefault() 

      if (player1) { 
        event.target.innerHTML = "X" 
        setPlayer1(false)
      } else {  
        event.target.innerHTML = "O" 
        setPlayer1(true)
      }
      console.log(event.target)
    }

    
    return (
  <div class="boardAlignment">   
    {/* { 
    board.map((v)=> {  
    return <div>{v.join("")}</div>  
  })
    }    */}

    <div class="boardGrid centerPeice" onClick={turn}>  
    <div class="tl centerPeice" onClick={turn}></div> 
    <div class="tm boardSquare centerPeice" onClick={turn}></div>
    <div class="tr centerPeice" onClick={turn}></div>
    <div class="ml boardSquare centerPeice" onClick={turn}></div>
    <div class="mm boardSquare centerPeice" onClick={turn}></div>
    <div class="mr boardSquare centerPeice" onClick={turn}></div>
    <div class="bl centerPeice" onClick={turn}></div> 
    <div class="bm boardSquare centerPeice" onClick={turn}></div>
    <div class="br centerPeice"  onClick={turn}></div>
    </div> 
    
    </div>
    );
  };
  
  export default Board;