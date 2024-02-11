import { useEffect, useRef } from "react";
import { Player } from "../../../types/enums";
import FireworksAnimation from "./FireworksAnimation";
import TicTacToeSymbol from "./TicTacToeSymbol";

type TProps = {
  winner: Player | null;
  onPlayAgainClicked: () => void;
};

export default function GameFinishedBanner({
  winner,
  onPlayAgainClicked,
}: TProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  return (
    <dialog ref={modalRef} className="modal" onClose={onPlayAgainClicked}>
      {winner && <FireworksAnimation />}
      <div className="modal-box">
        <h3 className="text-lg font-bold">
          {winner ? (
            <div className="flex items-center gap-4">
              WINNER: <TicTacToeSymbol player={winner} size="small" />
            </div>
          ) : (
            <>DRAW</>
          )}
        </h3>
        <div className="modal-action">
          <form method="dialog" onSubmit={onPlayAgainClicked}>
            <button type="submit" className="btn">
              Play again
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
