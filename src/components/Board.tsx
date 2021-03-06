import React, { useState } from "react";
import Square from "./Square";
import test from "./test.css";

export enum Player {
  X = "Player X",
  O = "Player O",
  WX = "Winner X",
  WO = "Winner O",
}

const Board: React.FC = () => {
  let squares: Array<string> = new Array(9).fill("");
  const [palyerState, setPlayer] = useState(Player.O);
  const [boardState, setSquareState] = useState(squares);

  const renderSquare = (
    boardState: Array<string>,
    i: number,
    palyerState: Player
  ) => {
    console.log(i);
    return (
      <Square
        boardState={boardState}
        index={i}
        setVal={setSquareState}
        player={palyerState}
        setPlayer={setPlayer}
      />
    );
  };

  return (
    <body className={test.body}>
      <div>{palyerState}</div>
      <div>
        <div className={test.boardrow}>
          {renderSquare(boardState, 0, palyerState)}
          {renderSquare(boardState, 1, palyerState)}
          {renderSquare(boardState, 2, palyerState)}
        </div>
        <div className={test.boardrow}>
          {renderSquare(boardState, 3, palyerState)}
          {renderSquare(boardState, 4, palyerState)}
          {renderSquare(boardState, 5, palyerState)}
        </div>
        <div className={test.boardrow}>
          {renderSquare(boardState, 6, palyerState)}
          {renderSquare(boardState, 7, palyerState)}
          {renderSquare(boardState, 8, palyerState)}
        </div>
      </div>
    </body>
  );
};

export default Board;
