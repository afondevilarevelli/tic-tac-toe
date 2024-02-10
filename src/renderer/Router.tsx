import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import GamePage from "./pages/GamePage";
import React from "react";
import HowToPlayPage from "./pages/HowToPlayPage";

export default function Router() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" Component={IndexPage} />
        <Route path="/game" Component={GamePage} />
        <Route path="/how-to-play" Component={HowToPlayPage} />
      </Routes>
    </React.StrictMode>
  );
}
