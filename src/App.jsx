import "./style.scss";
import Board from "./components/Board";
import { useEffect, useState } from "react";
import { playerOneFn, playerTwoFn } from "./testFn";
import { gameBoard, gameBoardTwo } from "./gameBoard";

const App = () => {
  const [mode, handleMode] = useState(1);
  const [turn, setTurn] = useState(0);
  const [value, setValue] = useState({
    playerOne: "",
    playerTwo: "",
  });
  const [fn, setFn] = useState({
    playerOne: "",
    playerTwo: "",
  });
  const [boardOne, setBoardOne] = useState([...gameBoard]);
  const [boardTwo, setBoardTwo] = useState([...gameBoardTwo]);

  const handleChange = (target) => {
    target.name === "code1"
      ? setValue({ ...value, playerOne: target.value })
      : setValue({ ...value, playerTwo: target.value });
  };

  const checkCode = (code) => {
    if (code.includes("script")) {
      alert("script 단어 금지");
    }
    if (code) {
      return true;
    }
  };

  const handleSubmit = (target) => {
    if (target.name === "code1" && checkCode(value.playerOne)) {
      setFn({ ...fn, playerOne: value.playerOne });
    } else if (target.name === "code2" && checkCode(value.playerTwo)) {
      setFn({ ...fn, playerTwo: value.playerTwo });
    }
  };

  useEffect(() => {
    if (fn.playerOne && fn.playerTwo) {
      handleMode(2);
    }
  }, [fn]);

  /***************** SCRIPT *******************/

  const setShips = (playerOneShip, playerTwoShip) => {
    let newBoardOne = [...boardOne];
    let newBoardTwo = [...boardTwo];
    for (let i = 0; i < playerOneShip.length; i++) {
      let posOne = playerOneShip[i].headPosition;
      let posTwo = playerTwoShip[i].headPosition;
      newBoardOne[posOne[0]][posOne[1]] = 1;
      newBoardTwo[posTwo[0]][posTwo[1]] = 1;
      for (let j = 0; j < i; j++) {
        switch (playerOneShip[i].tailDirection) {
          case "top":
            newBoardOne[posOne[0] + (j + 1)][posOne[1]] = 1;
            break;
          case "left":
            newBoardOne[posOne[0]][posOne[1] + (j + 1)] = 1;
            break;
          default:
            return;
        }

        switch (playerTwoShip[i].tailDirection) {
          case "top":
            newBoardTwo[posTwo[0] + (j + 1)][posTwo[1]] = 1;
            break;
          case "left":
            newBoardTwo[posTwo[0]][posTwo[1] + (j + 1)] = 1;
            break;
          default:
            return;
        }
      }
    }
    setBoardOne(newBoardOne);
    setBoardTwo(newBoardTwo);
  };

  const action = (attacker, targetBoard, turn) => {
    let target = attacker[turn].shoot;
    if (targetBoard[target[0]][target[1]] === 0) {
      targetBoard[target[0]][target[1]] = 3;
      console.log("nothing there...");
    } else if (targetBoard[target[0]][target[1]] === 1) {
      targetBoard[target[0]][target[1]] = 2;
      console.log("ship destroyed!");
    }
  };

  const runningScript = (playerOneFn, playerTwoFn, turn) => {
    // 각 플레이어별 필수 변수
    // ships: 총 5개의 배들 크기와 위치
    // 1 ~ n 까지의 스크립트
    let playerOne = playerOneFn();
    let playerTwo = playerTwoFn();
    if (turn === 0) {
      setShips(playerOne.ships, playerTwo.ships);
      setTurn(turn + 1);
      console.log("setting ships");
    } else {
      action(playerOne.scripts, boardTwo, turn - 1);
      action(playerTwo.scripts, boardOne, turn - 1);
      setTurn(turn + 1);
    }
    console.log("run");
  };

  useEffect(() => {
    if (mode === 3) {
      runningScript(playerOneFn, playerTwoFn, turn);
    } else if (mode === 2) {
    }
  }, [mode]);

  /***************** SCRIPT *******************/

  return (
    <div className="App">
      <header>
        {`Phase ${mode}`}
        {mode === 3 ? <h2>{turn}turn</h2> : null}
      </header>
      <section>
        <h1>Player 1</h1>
        <Board board={boardOne} setBoard={setBoardOne} />
        <div className="form">
          <textarea
            name="code1"
            onChange={(e) => handleChange(e.target)}
            disabled={mode === 1 ? false : true}
          />
          <button
            type="submit"
            name="code1"
            onClick={(e) => handleSubmit(e.target)}
            disabled={mode === 1 ? false : true}
          >
            submit
          </button>
        </div>
      </section>
      <section>
        <h1>Player 2</h1>
        <Board board={boardTwo} setBoard={setBoardTwo} />
        <div className="form">
          <textarea
            name="code2"
            onChange={(e) => handleChange(e.target)}
            disabled={mode === 1 ? false : true}
          />
          <button
            type="submit"
            name="code2"
            onClick={(e) => handleSubmit(e.target)}
            disabled={mode === 1 ? false : true}
          >
            submit
          </button>
        </div>
      </section>
      {mode === 2 ? (
        <div className="start">
          <button onClick={() => handleMode(3)}>START</button>
        </div>
      ) : mode === 3 ? (
        <div className="start">
          <button onClick={() => runningScript(playerOneFn, playerTwoFn, turn)}>
            NEXT TURN
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
