import React, { useState } from "react";
import test from "./test.css";
import { Player } from "./Board";

export interface SquareProp {
  boardState: Array<string>;
  index: number;
  setVal: React.Dispatch<React.SetStateAction<string[]>>;
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
}

const CheckWin = (boardState: Array<string>, player: Player): boolean => {
  let param = "◯";
  if (player === Player.X) param = "×";

  if (
    (boardState[0] === boardState[1] &&
      boardState[2] === param &&
      boardState[0] === boardState[2]) ||
    (boardState[3] === boardState[4] &&
      boardState[5] === param &&
      boardState[3] === boardState[5]) ||
    (boardState[6] === boardState[7] &&
      boardState[8] === param &&
      boardState[6] === boardState[8]) ||
    (boardState[0] === boardState[3] &&
      boardState[6] === param &&
      boardState[0] === boardState[6]) ||
    (boardState[1] === boardState[4] &&
      boardState[7] === param &&
      boardState[1] === boardState[7]) ||
    (boardState[2] === boardState[5] &&
      boardState[8] === param &&
      boardState[2] === boardState[8]) ||
    (boardState[0] === boardState[4] &&
      boardState[8] === param &&
      boardState[0] === boardState[8]) ||
    (boardState[2] === boardState[4] &&
      boardState[6] === param &&
      boardState[2] === boardState[6])
  ) {
    return true;
  }
  return false;
};

const Square: React.FC<SquareProp> = (props) => {
  const [squareState, setSquareValue] = useState(false);
  const handleClick = () => {
    if (squareState === false) {
      setSquareValue(true);
      switch (props.player) {
        case Player.O:
          props.boardState[props.index] = "◯";
          props.setVal(props.boardState);
          if (CheckWin(props.boardState, props.player)) {
            props.setPlayer(Player.WO);
          } else {
            props.setPlayer(Player.X);
          }
          break;
        case Player.X:
          props.boardState[props.index] = "×";
          props.setVal(props.boardState);
          if (CheckWin(props.boardState, props.player)) {
            props.setPlayer(Player.WX);
          } else {
            props.setPlayer(Player.O);
          }
          break;
      }
    }
  };

  return (
    <button onClick={handleClick} className={test.square}>
      {props.boardState[props.index]}
    </button>
  );
};

export default Square;
