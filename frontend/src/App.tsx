import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { PatientsProvider } from "./context/PatientsContext";
import Routings from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <PatientsProvider>
        <Router>
          <Header />
          <Routings />
          <GlobalStyle />
          <Footer />
        </Router>
      </PatientsProvider>
    </>
  );
}

export default App;
