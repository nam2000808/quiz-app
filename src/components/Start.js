import React from "react";
import { Link } from "react-router-dom";
import "../styles/Start.css";
const Start = () => {
  return (
    <div className="start-container">
      <h1>Chào mừng bạn bò hâm</h1>
      <p>cố làm nuôi mình nhe</p>
      <Link to="/Quiz">
        {""}
        {/* Sửa đường dẫn ở đây */}
        <button>Bài thi Hải quan</button>
      </Link>
      <Link to="/QuizEngligh">
        {""}
        <button>Bài thi tiếng Anh</button>
      </Link>
    </div>
  );
};

export default Start;
