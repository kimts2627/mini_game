import React, { useState } from "react";
import Block from "./Block";
import backGround from "../imgs/background.jpeg";

const Board = ({ board, setBoard }) => {
  return (
    <section className="board">
      <img src={backGround} alt="" />
      {board.map((row, rowIdx) =>
        row.map((val, colIdx) => (
          <Block
            key={colIdx}
            id={`${rowIdx},${colIdx}`}
            val={val}
            board={board}
            setBoard={setBoard}
          />
        ))
      )}
    </section>
  );
};

export default Board;
