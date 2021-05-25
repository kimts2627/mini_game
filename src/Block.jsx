import React from "react";

const Block = ({ id, val, board, setBoard }) => {

  const shoot = (e, board, setBoard) => {
    let newBoard = [...board];
    let id = e.currentTarget.id.split(',')
    let target = {
      x: id[0],
      y: id[1],
    }

    if(newBoard[target.x][target.y][0] === 1) {
      console.log(`${id} is on fire!`)
      console.log(`direct hit!!`)
      newBoard[target.x][target.y][0] = 2;
      setBoard(newBoard);
    } else if(newBoard[target.x][target.y][0] === 2) {
      console.log('this place is already fired..')
    } else {
      console.log(`${id} is on fire!`)
      console.log(`but nothing there..`)
      newBoard[target.x][target.y][0] = 2;
      setBoard(newBoard);
    }
  }

  return (
    <div className={ val === 2 ? "block-fire" : "block"} id={id} onClick={e => shoot(e, board, setBoard)} >
      {val === 1 ? <div className="ship" /> : null}
    </div>
  );
};

export default Block;
