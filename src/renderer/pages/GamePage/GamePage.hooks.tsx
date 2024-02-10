import { useState } from "react";
import { Player } from "../../types/enums";

export default function useGamePage() {
  const [currentTurn, setCurrentTurn] = useState(Player.X);

  return {
    currentTurn,
  };
}
