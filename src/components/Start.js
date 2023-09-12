import React from "react";
import { Link } from "react-router-dom";
import "../styles/Start.css";

const Start = () => {
  return (
    <div className="start-container">
      <h1>Chào mừng bạn bò hâm</h1>
      <p>cố làm nuôi mình nhe</p>
      <Link to="/quiz">
        <button>Bài thi Hải quan</button>
      </Link>
      <Link to="/QuizEnglish">
        <button>Bài thi tiếng Anh</button>
      </Link>
    </div>
  );
};

export default Start;
