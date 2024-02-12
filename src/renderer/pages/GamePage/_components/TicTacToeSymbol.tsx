import { memo } from "react";
import { Player } from "../../../types/enums";

type TProps = {
  player: Player;
  size?: "small" | "big";
};

function TicTacToeSymbol({ player, size = "big" }: TProps) {
  const clipPathDict = {
    [Player.X]: {
      clipPath:
        "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
    },
    [Player.O]: {
      clipPath: "circle(50% at 50% 50%)",
    },
  };

  const classNamesDict = {
    [Player.X]: "bg-red-500",
    [Player.O]: "bg-blue-500",
  };

  const sizeClassNames = {
    small: "h-6 w-6",
    big: "h-32 w-32 xl:h-48 xl:w-48 2xl:h-52 2xl:w-52",
  };

  return (
    <div
      className={
        "inline-block " + sizeClassNames[size] + " " + classNamesDict[player]
      }
      style={clipPathDict[player]}
    ></div>
  );
}

export default memo(TicTacToeSymbol);
