import React from "react";
import "../styles/sample_index.css";
// import "../styles/index_kong.css";

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
            <a href="#">로그인 페이지</a>
          </li>
          <li className="menu-item blue-dot">
            <a href="#">회원가입</a>
          </li>
          <li className="menu-item blue-dot">
            <a href="#">게시판</a>
          </li>
          <li className="menu-item blue-dot">
            <a href="#">테스트 01</a>
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
