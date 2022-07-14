import React from "react";

// Styles
import "./App.scss";

// Layouts
import { Header } from "./Layouts";

// React-Router-Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Header />
        }/>
      </Routes>
    </Router>
  );
}

export default App;
