import React, { useState } from "react";
import Square from "./Square";
const Board =  () => {
  const[state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

const checkWinner = () =>{
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    for(let logic  of winningCombinations ){
      const [a,b,c]  =logic;
      if(state[a] !==null && state[a] && state[a] === state[b] && state[b] === state[c]){
        return state[a];
      }
    }
    return false;
};

const isWinner= checkWinner();

 const handleClick = (index) =>{
  if(state[index] !== null){
    return;
  } 
   const copyState = [...state];
   copyState[index]=   isXTurn ? "X" : "O";
   setState(copyState);
   setIsXTurn(!isXTurn);
 };

 const handleReset = () =>{
  setState(Array(9).fill(null));
 }
   return(
    <div className="board-container">
      {/* <img src="https://img.freepik.com/free-vector/neon-geometric-border-dark-purple-background_53876-99066.jpg?w=740&t=st=1722791233~exp=1722791833~hmac=eb3536afe194f4d6e86e0b865ed1befbc43cd609b2c0e4fdfd43e0bdd312ccd8"></img> */}
      {isWinner ? (
<> <div id="result1"><h1 id="result"> {isWinner } Won the Game <button  id="playagainbtn"onClick={handleReset} >Play Again</button></h1></div></>) 
        :(
        <>
         <div className="board-row">
          <Square onClick={()=> handleClick(0)} value={state[0]}/>
          <Square onClick={()=> handleClick(1)}  value={state[1]}/>
          <Square onClick={()=> handleClick(2)} value={state[2]}/>
         </div>
         <div className="board-row">
         <Square onClick={()=> handleClick(3)} value={state[3]}/>
          <Square onClick={()=> handleClick(4)} value={state[4]}/>
          <Square onClick={()=> handleClick(5)} value={state[5]}/>

         </div>
         <div className="board-row">
         <Square onClick={()=> handleClick(6)} value={state[6]}/>
          <Square onClick={()=> handleClick(7)} value={state[7]}/>
          <Square onClick={()=> handleClick(8)} value={state[8]}/>

         </div>
         <h4 className="suggestion">Player  {isXTurn ? "X" : "0"} Please Move </h4>
         </>
         
      )}
    </div>
  );
}
export default Board;