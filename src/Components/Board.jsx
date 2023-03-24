import React, { useState } from "react";
import EachBox from "./EachBox";
import "./board.css"


function Board() {
    const WIN_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
  const [board, setboard] = useState(new Array(9).fill());
  const [xPLaying, setxPLaying] = useState(true)
  function setPlayer(index) {
    let updatedBoard=[...board];
    updatedBoard[index]=!board[index]&& xPLaying?"X":"O";
    setboard(updatedBoard);
    console.log(board);
    WIN_CONDITIONS.forEach(([x,y,z])=>{
        if(board[x]&& board[x]==board[y] &&board[y]==board[z]){
            alert(!xPLaying?"X Won":"O Won")
            setboard(new Array(9).fill());
        }
    })
    setxPLaying(!xPLaying);
    
  }
  return (
    <>
        <div className="board">
        {
            board.map((val,ind)=><EachBox key={ind} val={val} onClick={()=>{
                setPlayer(ind);
            }}></EachBox>)
        }
        </div>
    </>
  );
}

export default Board;
