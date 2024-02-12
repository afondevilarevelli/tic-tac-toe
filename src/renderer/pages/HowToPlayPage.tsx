import { Player } from "../types/enums";
import TicTacToeSymbol from "./GamePage/_components/TicTacToeSymbol";

const RULES = [
  "The game is played on a grid that's 3 squares by 3 squares.",
  <div>
    You are <TicTacToeSymbol player={Player.X} size="small" />, your friend is{" "}
    <TicTacToeSymbol player={Player.O} size="small" />. Players take turns
    putting their marks in empty squares.
  </div>,
  "The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.",
  "When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.",
];

export default function HowToPlayPage() {
  return (
    <div>
      <h1 className=" mb-4 text-4xl">RULES:</h1>
      <ol className="ml-12 list-decimal space-y-1 text-xl">
        {RULES.map((rule, idx) => (
          <li key={idx}>{rule}</li>
        ))}
      </ol>
    </div>
  );
}
