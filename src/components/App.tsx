import React from "react";
import Board from "./Board";
import test from "./test.css";


const App: React.FC  = () => {
  return (
    <div className={test.game}>
      <Board />
    </div>
  );
};
export default App;
