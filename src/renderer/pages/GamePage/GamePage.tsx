import useGamePage from "./GamePage.hooks";
import GameFinishedBanner from "./_components/GameFinishedBanner";
import GameGrid from "./_components/GameGrid";
import TurnIndicator from "./_components/TurnIndicator";

export default function GamePage() {
  const {
    currentTurn,
    onCellClicked,
    positions,
    winner,
    gameFinished,
    resetGame,
  } = useGamePage();

  return (
    <div className="relative flex  h-full items-center justify-center">
      <div className="absolute left-0 top-4">
        <TurnIndicator player={currentTurn} />
      </div>
      <GameGrid positions={positions} onCellClicked={onCellClicked} />

      {gameFinished && (
        <GameFinishedBanner winner={winner} onPlayAgainClicked={resetGame} />
      )}
    </div>
  );
}
