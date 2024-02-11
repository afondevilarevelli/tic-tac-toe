import { useState } from "react";
import { Player } from "../../types/enums";

export type TPositionItem = Player | null;
// Each index represents a position in the game grid
// 0|1|2
// 3|4|5
// 6|7|8
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

export default function useGamePage() {
  const [currentTurn, setCurrentTurn] = useState(Player.X);
  const [positions, setPositions] = useState(initialPositions);

  function onCellClicked(pos: number) {
    if (positions[pos]) return;
    setPositions((actual) => {
      actual[pos] = currentTurn;
      return actual;
    });

    setCurrentTurn((actual) => (actual == Player.X ? Player.O : Player.X));
  }

  return {
    currentTurn,
    onCellClicked,
    positions,
  };
}
