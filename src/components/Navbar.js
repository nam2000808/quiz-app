import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import tệp CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">QUIZ'S BÒ HÂM</h1>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              HOME
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/quiz" className="navbar__link">
              QUIZ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
