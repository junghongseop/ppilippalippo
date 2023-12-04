import { BrowserRouter } from "react-router-dom";
import Routers from "./Component/router";
import "./App.css";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
