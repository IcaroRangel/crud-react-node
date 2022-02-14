import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Routings from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routings />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
