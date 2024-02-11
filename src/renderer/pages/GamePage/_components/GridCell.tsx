import TicTacToeSymbol from "./TicTacToeSymbol";
import { TPositionItem } from "../GamePage.hooks";

type TProps = {
  item: TPositionItem;
  onCellClicked: () => void;
};

export default function GridCell({ item, onCellClicked }: TProps) {
  return (
    <div
      onClick={onCellClicked}
      className="flex h-40 w-40 items-center justify-center bg-base-100 xl:h-56 xl:w-56 2xl:h-64 2xl:w-64"
    >
      {item && <TicTacToeSymbol player={item} />}
    </div>
  );
}
