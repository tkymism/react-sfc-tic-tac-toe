import React, { useState } from 'react';
import Board from './Board';
import History from './History';
import Status from './Status';

const Game = () => {
  const initHistory = [{ squares: Array(9).fill(null) }];
  const [history, setHistory] = useState(initHistory);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = i => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? "X" : "O";
    setHistory(_history.concat([{squares: squares}]));
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = step => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }  
  
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={history[stepNumber].squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <Status 
          winner={calculateWinner(history[stepNumber].squares)}
          xIsNext={xIsNext} />
        <History 
          history={history} 
          onClick={step => jumpTo(step)} 
        />
      </div>
    </div>
  );
}

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
    }
  }
  return null;
}

export default Game;