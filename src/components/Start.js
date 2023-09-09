import React from "react";
import { Link } from "react-router-dom";
import "../styles/Start.css";
const Start = () => {
  return (
    <div className="start-container">
      <h1>Chào mừng bạn bò hâm</h1>
      <p>cố làm nuôi mình nhe</p>
      <Link to="/quiz">
        {""}
        {/* Sửa đường dẫn ở đây */}
        <button>Bắt đầu</button>
      </Link>
    </div>
  );
};

export default Start;
