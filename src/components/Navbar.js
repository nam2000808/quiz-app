import React, { useState } from "react";
import { Link, Routes, Route, Outlet, Navigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">
          <Link to="/" className="navbar__link">
            QUIZ'S BÒ HÂM
          </Link>
        </h1>
        <ul className="navbar__list">
          <li className="navbar__item">
            <button to="/" className="navbar__link">
              HOME
            </button>
          </li>
          <li className="navbar__item">
            <button className="navbar__link" onClick={handleMenuToggle}>
              QUIZ
            </button>
            {showMenu && <QuizMenu />}
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/quiz/english" element={<QuizEnglish />} />
        <Route path="/quiz/customs" element={<QuizCustoms />} />
      </Routes>
    </nav>
  );
};

const QuizMenu = () => {
  return (
    <ul className="quiz-menu">
      <li>
        <Link to="/Quiz" className="navbar__link">
          Bài thi Hải quan
        </Link>
      </li>
      <li>
        <Link to="/QuizEnglish" className="navbar__link">
          Bài thi tiếng anh
        </Link>
      </li>
    </ul>
  );
};

const QuizEnglish = () => {
  return (
    <div>
      <h2>English Quiz Page</h2>
      {/* Add English quiz content */}
    </div>
  );
};

const QuizCustoms = () => {
  return (
    <div>
      <h2>Customs Quiz Page</h2>
      {/* Add Customs quiz content */}
    </div>
  );
};

export default Navbar;
