import { useEffect, useRef } from "react";
import { Player } from "../../../types/enums";

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

    return () => modalRef.current?.close();
  }, []);

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">
          {winner ? <>WINNER: {winner}</> : <>DRAW</>}
        </h3>
        <div className="modal-action">
          <form method="dialog" onSubmit={onPlayAgainClicked}>
            {/* if there is a button in form, it will close the modal */}
            <button type="submit" className="btn">
              Play again
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}