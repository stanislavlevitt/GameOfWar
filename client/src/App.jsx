import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import Navbar from "./components/Navbar";
import GameTable from "./components/GameTable/GameTable";

function App() {
  return (
    <main>
      <Navbar />
      <GameTable />
    </main>
   )
}

export default App
