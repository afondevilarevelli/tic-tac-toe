import { createRoot } from "react-dom/client";
import Router from "./Router";
import PreviousPageBtn from "./components/PreviousPageBtn";
import { HashRouter } from "react-router-dom";

const root = createRoot(document.getElementById("app"));
root.render(<App />);

function App() {
  return (
    <main>
      <HashRouter>
        <PreviousPageBtn />
        <Router />
      </HashRouter>
    </main>
  );
}
