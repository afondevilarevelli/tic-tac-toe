import { Player } from "../../types/enums";

export type TPositionItem = Player | null;

const WINING_CASES = [
  //#region "Horizontal"
  [1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1],
  //#endregion "Horizontal"

  //#region "Vertical"
  [1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1],
  //#endregion "Vertical"

  //#region "Diagonal"
  [1, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 1, 0, 0],
  //#endregion "Diagonal"
];

export function getWinnerPlayer(positions: TPositionItem[]) {
  // Check X
  const onlyXPositions = positions.map((p) => (p == Player.X ? 1 : 0));
  const winnerX = WINING_CASES.some((wc) =>
    wc.every((wci, idx) => wci === onlyXPositions[idx]),
  );

  if (winnerX) return Player.X;

  // Check O
  const onlyOPositions = positions.map((p) => (p == Player.O ? 1 : 0));
  const winnerO = WINING_CASES.some((wc) =>
    wc.every((wci, idx) => wci === onlyOPositions[idx]),
  );
  if (winnerO) return Player.O;

  // No winner
  return null;
}
