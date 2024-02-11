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

  function onCellClicked(pos: number) {
    if (gameFinished) return;

    setPositions((actual) =>
      actual.map((ac, idx) => (pos == idx ? currentTurn : ac)),
    );

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
      if (winner) setWinner(winner);
      setGameFinished(!!winner || positions.every((p) => p));
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
