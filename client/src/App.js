import React from "react";

// Styles
import "./App.scss";

// Layouts
import { Header, Main } from "./Layouts";

// React-Router-Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
