import TicTacToeSymbol from "./TicTacToeSymbol";
import { Player } from "../../../types/enums";

type TProps = {
  player: Player;
};
export default function TurnIndicator({ player }: TProps) {
  return (
    <div className="flex h-fit items-center gap-4">
      <h2 className="text-xl 2xl:text-2xl">Current turn:</h2>
      <TicTacToeSymbol player={player} size="small" />
    </div>
  );
}
