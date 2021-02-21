import React, { useState } from "react";

export enum Player {
  X = "×",
  O = "◯",
}
const Players: React.FC = () => {
  const [palyerState, setPlayer] = useState(Player.O);

  return <div>Player{palyerState}</div>;
};

export default Players;
