import { FaArrowLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export default function PreviousPageBtn() {
  const location = useLocation();
  const navigate = useNavigate();

  const isIndexLocation = location.pathname == "/";

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className={"btn btn-circle " + (isIndexLocation && "btn-disabled")}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
}
