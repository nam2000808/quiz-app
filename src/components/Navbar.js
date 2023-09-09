
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

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/quiz">QUIZ</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
