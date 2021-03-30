import React, { useState } from "react";

const Board = () => {
  const board = [
    ["-", "-", "-", "-", "-"],
    ["|", " ", "|", " ", "|", " ", "|"],
    ["-", "-", "-", "-", "-"],
    ["|", " ", "|", " ", "|", " ", "|"],
    ["-", "-", "-", "-", "-"],
    ["| ", " ", "|", " ", "|", " ", "|"],
    ["-", "-", "-", "-", "-"],
  ];

  const [player1, setPlayer1] = useState(true);

  const turn = (event) => {
    event.preventDefault();

    if (player1) {
      if (event.target.innerHTML === "") {
        event.target.innerHTML = "X";
        setPlayer1(false);
        document.getElementById("x").style.color = "white";
        document.getElementById("o").style.color = "#1a9b69";

        const x = event.target.innerHTML;
        // regiter vertical win
        if (event.target.id - 3 >= 0 && parseInt(event.target.id) + 3 <= 8) {
          console.log("check both up and down");

          if (
            document.getElementById(`${parseInt(event.target.id) - 3}`)
              .innerHTML == x &&
            document.getElementById(`${parseInt(event.target.id) + 3}`)
              .innerHTML == x
          ) {
            console.log("toggle winning");
          }
        } else if (parseInt(event.target.id) - 3 >= 0) {
          console.log("check up");
          let count = 0;
          for (let i = event.target.id; i > event.target.id - 6; i -= 3) {
            if (document.getElementById(i).innerHTML === x) {
              count += 1;
            }
          }

          count === 2 ? console.log("toggle winning") : console.log(":/");
        } else if (parseInt(event.target.id) + 3 <= 8) {
          console.log("check down");

          let count = 0;

          for (
            let i = parseInt(event.target.id);
            i < parseInt(event.target.id) + 6;
            i += 3
          ) {
            if (document.getElementById(i).innerHTML === x) {
              count += 1;
            }
          }

          count === 2 ? console.log("toggle winning") : console.log(":/");
        }
      }
    } else {
      if (event.target.innerHTML === "") {
        event.target.innerHTML = "O";
        setPlayer1(true);
        document.getElementById("o").style.color = "white";
        document.getElementById("x").style.color = "#1a9b69";

        const o = event.target.innerHTML;
        // regiter vertical win
        if (event.target.id - 3 >= 0 && parseInt(event.target.id) + 3 <= 8) {
          console.log("check both up and down");

          if (
            document.getElementById(`${parseInt(event.target.id) - 3}`)
              .innerHTML == o &&
            document.getElementById(`${parseInt(event.target.id) + 3}`)
              .innerHTML == o
          ) {
            console.log("toggle winning");
          }
        } else if (parseInt(event.target.id) - 3 >= 0) {
          console.log("check up");
          let count = 0;
          for (let i = event.target.id; i > event.target.id - 6; i -= 3) {
            if (document.getElementById(i).innerHTML === o) {
              count += 1;
            }
          }

          count === 2 ? console.log("toggle winning") : console.log(":/");
        } else if (parseInt(event.target.id) + 3 <= 8) {
          console.log("check down");

          let count = 0;

          for (
            let i = parseInt(event.target.id);
            i < parseInt(event.target.id) + 6;
            i += 3
          ) {
            if (document.getElementById(i).innerHTML === o) {
              count += 1;
            }
          }

          count === 2 ? console.log("toggle winning") : console.log(":/");
        }
      }
    }
  };

  return (
    <div class="interface">
      <div class="player1 players">
        <h2>Player 1</h2>
        <h2 id="x">X</h2>
      </div>
      <div class="boardAlignment">
        {/* { 
    board.map((v)=> {  
    return <div>{v.join("")}</div>  
  })
    }    */}

        <div class="boardGrid">
          <div class="tl centerPeice" id="0" onClick={turn}></div>
          <div class="tm boardSquare centerPeice" id="1" onClick={turn}></div>
          <div class="tr centerPeice" id="2" onClick={turn}></div>
          <div class="ml boardSquare centerPeice" id="3" onClick={turn}></div>
          <div class="mm boardSquare centerPeice" id="4" onClick={turn}></div>
          <div class="mr boardSquare centerPeice" id="5" onClick={turn}></div>
          <div class="bl centerPeice" id="6" onClick={turn}></div>
          <div class="bm boardSquare centerPeice" id="7" onClick={turn}></div>
          <div class="br centerPeice" id="8" onClick={turn}></div>
        </div>
      </div>
      <div class="player2 players">
        <h2>Player 2</h2>
        <h2 id="o">O</h2>
      </div>
    </div>
  );
};

export default Board;
