import { useState, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Board from '../Board';
import Modal from '../Modal';
import {
  calculateWinner,
  calculateCurrentPosition,
} from '../../helpers/helpers';
import './Game.scss';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [movesHistory, setMovesHistory] = useState([null]);
  const [isXFirst, setIsXFirst] = useState(true);
  const [moveNumber, setMoveNumber] = useState(0);
  const [isAscending, setIsAscending] = useState(true);

  const isXNext = isXFirst ? moveNumber % 2 === 0 : moveNumber % 2 === 1;
  const currentCells = history[moveNumber];

  const ascRef = useRef(null);
  const descRef = useRef(null);
  const arrowRef = isAscending ? descRef : ascRef;

  const handleClick = i => {
    if (calculateWinner(currentCells) || currentCells[i]) {
      return;
    }
    const nextCells = currentCells.slice();
    nextCells[i] = isXNext ? 'X' : 'O';
    const nextHistory = [...history.slice(0, moveNumber + 1), nextCells];
    setHistory(nextHistory);
    setMovesHistory([...movesHistory.slice(0, moveNumber + 1), i]);
    setMoveNumber(nextHistory.length - 1);
  };

  const jumpTo = number => {
    setMoveNumber(number);
  };

  const toggleOrder = () => {
    setIsAscending(!isAscending);
  };

  const chooseFirstPlayer = e => {
    setIsXFirst(JSON.parse(e.target.value));
  };

  let status;
  let winnerLine = null;
  const winner = calculateWinner(currentCells);

  if (winner) {
    status = `Winner: ${winner.cell}`;
    winnerLine = winner.line;
  } else if (!winner && !currentCells.includes(null)) {
    status = 'Played a draw';
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  const moves = history.map((cells, move) => {
    let desc;
    let currentPosition;
    if (move) {
      currentPosition = calculateCurrentPosition(movesHistory[move]);
      desc = `Go to move ${move}`;
    } else {
      desc = 'Go to game start';
    }
    return (
      <li
        key={desc}
        onClick={() => jumpTo(move)}
        className={`move ${move === moveNumber ? 'active' : ''}`}
      >
        <button className="btn" data-testid={`btn-${move}`}>
          {desc}
        </button>
        {move !== 0 && (
          <>
            <Board cells={cells} currentIndex={movesHistory[move]} />
            <span className="position">
              <span>{currentPosition.row}</span>
              <span>{currentPosition.col}</span>
            </span>
          </>
        )}
      </li>
    );
  });

  const orderedMoves = isAscending ? moves : [...moves].reverse();

  return (
    <div className="game">
      <div className="game-board">
        <div className="panel">
          <p className="status">{status}</p>
          <Board
            winnerLine={winnerLine}
            cells={currentCells}
            onClick={i => handleClick(i)}
          />
        </div>
      </div>
      <div className="game-info">
        {history.length > 1 && (
          <button className="order" onClick={toggleOrder}>
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={isAscending}
                nodeRef={arrowRef}
                addEndListener={done =>
                  arrowRef.current.addEventListener(
                    'transitionend',
                    done,
                    false,
                  )
                }
                classNames="arrow"
              >
                <span className="arrow" ref={arrowRef}>
                  {String.fromCharCode(isAscending ? 10225 : 10224)}
                </span>
              </CSSTransition>
            </SwitchTransition>
          </button>
        )}
        <ul className="moves">{orderedMoves}</ul>
      </div>
      <Modal handleChange={chooseFirstPlayer} />
    </div>
  );
};

export default Game;
