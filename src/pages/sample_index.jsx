import React from "react";
import "../styles/sample_index.css";
// import "../styles/index_kong.css";

import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
    <div className="app-wrapper1">
    <div className="header1">
      <h1>React 개발 SAMPLE PAGE1</h1>
      {/* <div className="menu-icon">☰</div> */}
    </div>
    <div className="menu-container1">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#">LIST</a>
          </li>
          <li className="menu-item blue-dot">
            <Link to={"/login"}>로그인 페이지로(비밀번호변경/비밀번호재설정)</Link>
          </li>
          <li className="menu-item blue-dot">
            <Link to={"/memberInsert"}>회원가입</Link>
          </li>
          <li className="menu-item blue-dot">
            <Link to={"/board"}>게시판</Link>
          </li>
          <li className="menu-item blue-dot">
            <Link to={"/notice"}>공지사항</Link>
          </li>
          <li className="menu-item blue-dot">
            <a href="#">테스트 01</a>
          </li>
          <li className="menu-item blue-dot">
            <a href="#">테스트 </a>
          </li>

        </ul>
      </div>
      </div></>
     
  );
};



export default App;
