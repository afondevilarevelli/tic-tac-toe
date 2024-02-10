import { createRoot } from "react-dom/client";
import IndexPage from "./pages/IndexPage";

const root = createRoot(document.getElementById("app"));
root.render(<App />);

function App() {
  return (
    <main>
      <IndexPage />
    </main>
  );
}
