import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill("--"));
  const [move, setMove] = useState("X");
  const [winner, setWinner] = useState(null);
  const [turn ,setTurn] =useState("Turn of " + move);

 

  let Again=[...board];
  Again.fill("--");

  
  const [win, setWin] = useState(false);

  
  const checkResult = (copyArr) => {
    //checking for draw
    if (!copyArr.find((i) => i == "--")) {
      console.log("finished");
      setWin(true);
      setWinner("MATCH Drawn ")
    }

    let Conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    Conditions.forEach((element) => {
      if (
        copyArr[element[0]] !== "--" &&
        copyArr[element[1]] !== "--" &&
        copyArr[element[2]] !== "--"
      )
        if (
          copyArr[element[0]] === copyArr[element[1]] &&
          copyArr[element[0]] == copyArr[element[2]]
        ) {
          //alert(board[element[0]] + "  is Winner ");
          setWinner(copyArr[element[0]] + "  is Winner ");
          setWin(true);
        }
    });
  };

  const insertValue = (index) => {
    
   if(!win){
    let copyArr = [...board];
   

    if (copyArr[index] !== "X" && copyArr[index] !== "O") {
      copyArr[index] = move;
      checkResult(copyArr);
      setBoard(copyArr);
      // if (win) {
      //   copyArr.fill("--");
      //   setBoard(copyArr);
      // }

      if (move == "X") {
        setMove("O");
        setTurn("Turn of O");
      } else {
        setMove("X");
        setTurn("Turn of X");
      }

     
    } else {
      alert("Already clicked");
    }
    
   }
  };

  return (

    <>
    <div style={{
        backgroundColor: "lightyellow ",
        padding: "0.5rem",
        "text-align": "center",
        "margin-top": "2rem",
      }}>
        <h2 style={{color:"purple"}}>
          MADE by Samiullah
        </h2>
      </div>
    <div
      style={{
        backgroundColor: "Orange",
        padding: "0.5rem",
        "text-align": "center",
        "margin-top": "2rem",
      }}
    >
      <h1>First React Project</h1>

      <h3 style={{ color: "black" }}>Tic Tac toe Game</h3>
      <table>
        <tbody>
          <tr>
            <td
              onClick={() => {
                insertValue(0);
              }}
            >
              {board[0]}
            </td>
            <td
              onClick={() => {
                insertValue(1);
              }}
            >
              {board[1]}
            </td>
            <td
              onClick={() => {
                insertValue(2);
              }}
            >
              {board[2]}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                insertValue(3);
              }}
            >
              {board[3]}
            </td>
            <td
              onClick={() => {
                insertValue(4);
              }}
            >
              {board[4]}
            </td>
            <td
              onClick={() => {
                insertValue(5);
              }}
            >
              {board[5]}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                insertValue(6);
              }}
            >
              {board[6]}
            </td>
            <td
              onClick={() => {
                insertValue(7);
              }}
            >
              {board[7]}
            </td>
            <td
              onClick={() => {
                insertValue(8);
              }}
            >
              {board[8]}
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        
      {!win ? <h2 className="win element-to-bounce" >{turn}</h2>:<></>}

        {win ?<><h2 className="win">{winner}</h2> <button type="button" onClick={({})=>{
          setBoard(Again);
          setWin(false);
          setMove(X);
        }
          }>Play Again</button></> : <></>}
      </div>
    </div>
    </>
  );
};

export default TicTacToe;
