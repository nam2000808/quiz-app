// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import "./App.css"; // Import tệp CSS
import Navbar from "./components/Navbar";
import QuizEnglish from "./components/QuizEnglish";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/quiz/*" element={<Quiz />} />
          <Route path="/QuizEnglish/*" element={<QuizEnglish />} />
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
};

export default App;
