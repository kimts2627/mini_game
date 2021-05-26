import "./style.scss";
import Board from "./components/Board";
import { useEffect, useState } from "react";
import { playerOneFn, playerTwoFn } from './testFn';

const App = () => {
  const [mode, handleMode] = useState(1);
  const [turn, setTurn] = useState(0);
  const [value, setValue] = useState({
    playerOne: '',
    playerTwo: '',
  });
  const [fn, setFn] = useState({
    playerOne: '',
    playerTwo: '',
  });
  const [boardOne, setBoardOne] = useState([
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  ]);
  const [boardTwo, setBoardTwo] = useState([
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
    [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  ]);

  const handleChange = (target) => {
    target.name === 'code1' ?
    setValue({...value, playerOne: target.value}) :
    setValue({...value, playerTwo: target.value})
  }

  const checkCode = (code) => {
    if(code.includes('script')) {
      alert("script 단어 금지");
    }
    if(code) {
      return true;
    }
  }

  const handleSubmit = (target) => {
    if(target.name === 'code1' && checkCode(value.playerOne)) {
      setFn({...fn, playerOne: value.playerOne});
    } else if (target.name === 'code2' && checkCode(value.playerTwo)) {
      setFn({...fn, playerTwo: value.playerTwo});
    }
  }

  useEffect(() => {
    if(fn.playerOne && fn.playerTwo) {
      handleMode(2);
    }
  }, [fn]);

  /***************** SCRIPT *******************/

  const setShips = (playerOneShip, playerTwoShip) => {
    for(let i = 0; i < playerOneShip.length; i ++) {
      let posOne = playerOneShip[i].headPosition;
      let posTwo = playerTwoShip[i].headPosition;
      let newBoardOne = [...boardOne];
      let newBoardTwo = [...boardTwo];
      newBoardOne[posOne[0]][posOne[1]][0] = 1;
      for(let j = 0; j < i; j ++) {
        switch(playerOneShip[i].tailDirection) {
          case 'top':
            newBoardOne[posOne[0] +(j+1)][posOne[1]][0] = 1;
            break;
          case 'left':
            newBoardOne[posOne[0]][posOne[1] +(j+1)][0] = 1;
            break;
          default:
            return;
        }

        switch(playerTwoShip[i].tailDirection) {
          case 'top':
            newBoardTwo[posTwo[0] +(j+1)][posTwo[1]][0] = 1;
            break;
          case 'left':
            newBoardTwo[posTwo[0]][posTwo[1] +(j+1)][0] = 1;
            break;
          default:
            return;
        }
      }
      setBoardOne(newBoardOne);
      setBoardTwo(newBoardTwo);
    }
  }

  const runningScript = (playerOneFn, playerTwoFn, turn) => {
    // 각 플레이어별 필수 변수
    // ships: 총 5개의 배들 크기와 위치
    // 1 ~ n 까지의 스크립트
    let playerOne = playerOneFn();
    let playerTwo = playerTwoFn();
    if(turn === 0) {
      setShips(playerOne.ships, playerTwo.ships);
      console.log('setShip')
    }


    console.log('run')
  }

  useEffect(() => {
    if(mode === 3) {
      runningScript(playerOneFn, playerTwoFn, turn);
    }
  }, [mode]);
  /***************** SCRIPT *******************/

  return (
    <div className="App">
      <header>{`Phase ${mode}`}</header>
      <section>
        <h1>Player 1</h1>
        <Board board={boardOne} setBoard={setBoardOne} />
        <div className='form'>
          <textarea name='code1' onChange={e => handleChange(e.target)} disabled={mode === 1 ? false : true} />
          <button type="submit" name='code1' onClick={e => handleSubmit(e.target)} disabled={mode === 1 ? false : true} >submit</button>
        </div>
      </section>
      <section>
        <h1>Player 2</h1>
        <Board board={boardTwo} setBoard={setBoardTwo} />
        <div className='form'>
          <textarea name='code2' onChange={e => handleChange(e.target)} disabled={mode === 1 ? false : true} />
          <button type="submit" name='code2' onClick={e => handleSubmit(e.target)} disabled={mode === 1 ? false : true} >submit</button>
        </div>
      </section>
      {
        mode === 2 ?
        <div className='start'>
          <button onClick={() => handleMode(3)} >START</button>
        </div> :
        null
      }
    </div>
  );
}

export default App;
