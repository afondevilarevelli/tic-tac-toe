import useGamePage from "./GamePage.hooks";
import TicTacToeSymbol from "../../components/TicTacToeSymbol";
import { Player } from "../../types/enums";

export default function GamePage() {
  const { currentTurn } = useGamePage();
  return (
    <div>
      Turn: {currentTurn}
      <TicTacToeSymbol player={Player.O} />
      <TicTacToeSymbol player={Player.X} />
    </div>
  );
}
