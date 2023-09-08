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

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/quiz/*" element={<Quiz />} />
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
};

export default App;
