// App.jsx
import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [winner, setWinner] = useState(null);
  let winner = null;
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);

  for (const comb of WINNING_COMBINATIONS) {
    const firstSquare = gameTurns[comb[0].row][comb[0].column];
    const secondSquare = gameTurns[comb[1].row][comb[1].column];
    const thirdSquare = gameTurns[comb[2].row][comb[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare; // Assign the symbol of the winning player
      console.log(winner);
    }
  }

  const handleSelect = (row, col) => {
    // setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      const activePlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: row, col: col }, player: activePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const gameBoard = gameTurns.reduce(
    (board, turn) => {
      const { row, col } = turn.square;
      const { player } = turn;
      board[row][col] = player;
      return board;
    },
    [...initialGameBoard]
  );

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner && <GameOver winner={winner} />}
        <GameBoard
          onSelect={handleSelect}
          gameTurns={gameTurns}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
