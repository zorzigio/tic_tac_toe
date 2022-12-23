import React, { useEffect, useState } from "react";
import Square from "./Square";
import { SquareValue, Status } from "~/models/Board";

export default function TicTacToe() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(SquareValue.EMPTY));
  const [status, setStatus] = useState<Status>(Status.NextX);

  function checkStatus(squares: SquareValue[]) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setStatus(squares[a] == SquareValue.X ? Status.WinnerX : Status.WinnerO);
        return;
      }
    }
    // count how many squares are filled
    const filledSquares = squares.filter((square) => square !== SquareValue.EMPTY).length;
    if (filledSquares === 9) {
      setStatus(Status.Tie);
      return;
    }
    setStatus(status === Status.NextX ? Status.NextO : Status.NextX);
    return;
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(SquareValue.EMPTY));
    setStatus(Status.NextX);
  };

  const handleClick = (i: number) => {
    if (squares[i] !== SquareValue.EMPTY) {
      return;
    }
    squares[i] = status === Status.NextX ? SquareValue.X : SquareValue.O;
    setSquares(squares);

    checkStatus(squares);
  };

  return (
    <div className="page">
      <div className="board">
        <div className="row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="status">{status}</div>
      <div className="reset">
        <button onClick={handleRestart}>Reset</button>
      </div>
    </div>
  );
}
