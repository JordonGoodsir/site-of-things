import React, { useState } from "react";


const Board = () => { 
  const [boardPeices, setBoardPeices] = useState(Array(9).fill(null)); 
  const [player1, setplayer1] = useState(true);  


const playerTurn = (event) =>{  

if(winner(boardPeices)) {

} else {  
  let index = event.target.attributes.getNamedItem('index').value 

  let piece = (player1 === true ? "X": "O") 
  
  boardPeices.splice(parseInt(index),1,piece) 
  
  player1 === true ? setplayer1(false) : setplayer1(true) 

}
}  


const winner = (boardPeices) =>{  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (boardPeices[a] && boardPeices[a] === boardPeices[b] && boardPeices[a] === boardPeices[c]) {
      return boardPeices[a];
    }
  }
  return null;

}  

const wipeBoard = () =>{ 
  setBoardPeices(Array(9).fill(null))
}

 if (winner(boardPeices)){  
   console.log(`Winner ${winner(boardPeices)}`)
 }


    return (
  <div class="knotsPage">  
  <div class="boardGrid">
  {boardPeices.map((v,i) =>{ 
    return <div class="squares" index={i} onClick={playerTurn}>{v}</div>
  })}  
  </div> 
  {winner(boardPeices) ? <div class="winningPopUp"><h2 class="winner">{winner(boardPeices)} WINS!</h2><div onClick={wipeBoard} class="playAgain">Play Again?</div></div> : <div></div> }
  </div>
    );
  };
  
  export default Board;