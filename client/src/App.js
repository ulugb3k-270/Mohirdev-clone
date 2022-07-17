import React from "react";

// Styles
import "./App.scss";

// COMPONENTS
import { Caution, Navbar } from "./Components";

// Layouts
import { Footer, Header, Main } from "./Layouts";

// PAGES
import { Courses } from "./pages";

// React-Router-Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Caution />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route
          path="/courses"
          element={
            <>
              <Navbar type="background" />
              <Courses />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar type="background" />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
