import React, { useState } from "react";
// import "./LoginPage.css";
import "../styles/login.css";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [saveId, setSaveId] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    alert("로그인 처리 중...");
    // 실제 로그인 처리 로직 작성
  };

  const handleSaveIdChange = () => {
    setSaveId(!saveId);
    console.log(
      !saveId ? "아이디 저장이 활성화되었습니다." : "아이디 저장이 비활성화되었습니다."
    );
  };

  const handleSecureLogin = () => {
    alert("비밀번호 찾기 페이지로 이동합니다.");
  };

  return (
    <div className="login-container">
      <div className="logo1">
        <h1>
          <span className="a-star">에이플러스</span> 라이프 로그인
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <span className="icon user-icon"></span>
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <span className="icon lock-icon"></span>
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="saveId"
              checked={saveId}
              onChange={handleSaveIdChange}
            />
            <label htmlFor="saveId">아이디저장</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="secureLogin"
              onChange={handleSecureLogin}
            />
            <label htmlFor="secureLogin">비밀번호찾기</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;