import { useEffect, useState } from "react";
import { Player } from "../../types/enums";
import { TPositionItem, getWinnerPlayer } from "./utils";

export default function useGamePage() {
  const [currentTurn, setCurrentTurn] = useState(Player.X);
  const [winner, setWinner] = useState<Player | null>(null);
  const [gameFinished, setGameFinished] = useState(false);

  const initialPositions: TPositionItem[] = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const [positions, setPositions] = useState(initialPositions);

  console.log(positions);
  function onCellClicked(pos: number) {
    if (gameFinished) return;

    if (positions[pos]) return;
    setPositions((actual) => {
      actual[pos] = currentTurn;
      return actual;
    });

    setCurrentTurn((actual) => (actual == Player.X ? Player.O : Player.X));
  }

  function resetGame() {
    setGameFinished(false);
    setCurrentTurn(Player.X);
    setWinner(null);
    setPositions(initialPositions);
  }

  useEffect(() => {
    function checkGame() {
      const winner = getWinnerPlayer(positions);

      console.log("WINNER:", winner);
      if (winner) {
        setWinner(winner);
        setGameFinished(true);
      } else if (positions.every((p) => p)) setGameFinished(true);
    }

    checkGame();
  }, [currentTurn]);

  return {
    currentTurn,
    onCellClicked,
    positions,
    resetGame,
    winner,
    gameFinished,
  };
}
