import React from "react";

// Styles
import "./App.scss";

// Layouts
import { Footer, Header, Main } from "./Layouts";

// React-Router-Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Caution } from "./Components";

function App() {
  return (
    <Router>
      <Caution />
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
