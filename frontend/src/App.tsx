import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routings from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Router>
        <Routings />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
