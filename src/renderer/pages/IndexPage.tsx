import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center gap-16">
      <Logo />
      <div className="flex w-full max-w-[600px] flex-col gap-8 px-12">
        <Link to="/game" className="btn btn-primary btn-lg">
          Play
        </Link>
        <Link to="/how-to-play" className="btn btn-outline btn-secondary">
          How to play?
        </Link>
      </div>
    </div>
  );
}
