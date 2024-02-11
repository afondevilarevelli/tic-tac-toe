import { createRoot } from "react-dom/client";
import Router from "./Router";
import PreviousPageBtn from "./components/PreviousPageBtn";
import { HashRouter } from "react-router-dom";

const root = createRoot(document.getElementById("app"));
root.render(<App />);

function App() {
  return (
    <>
      <HashRouter>
        <div className="h-[8vh] pl-4 pt-4">
          <PreviousPageBtn />
        </div>
        <main className="h-[92vh] px-8 py-4">
          <Router />
        </main>
      </HashRouter>
    </>
  );
}
