import { FaArrowLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export default function PreviousPageBtn() {
  const location = useLocation();
  const navigate = useNavigate();

  const isIndexLocation = location.pathname == "/";

  return (
    <div
      className={!isIndexLocation ? "tooltip tooltip-right" : undefined}
      data-tip="Go home"
    >
      <button
        onClick={() => navigate("/")}
        className={"btn btn-circle " + (isIndexLocation && "invisible")}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
}
