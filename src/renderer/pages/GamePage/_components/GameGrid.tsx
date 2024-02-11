import { TPositionItem } from "../utils";
import GridCell from "./GridCell";

type TProps = {
  positions: TPositionItem[];
  onCellClicked: (pos: number) => void;
};

export default function GameGrid({ positions, onCellClicked }: TProps) {
  return (
    <div className="grid grid-cols-3 gap-2 bg-secondary">
      {positions.map((item, idx) => (
        <GridCell
          key={idx}
          item={item}
          onCellClicked={() => onCellClicked(idx)}
        />
      ))}
    </div>
  );
}
