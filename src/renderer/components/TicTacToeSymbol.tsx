import React, { memo } from "react";
import { Player } from "../types/enums";

type TProps = {
  player: Player;
};

function TicTacToeSymbol({ player }: TProps) {
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

  return (
    <div
      className={"h-48 w-48 " + classNamesDict[player]}
      style={clipPathDict[player]}
    ></div>
  );
}

export default memo(TicTacToeSymbol);
