import React, { useState } from "react";
// import "./LoginPage.css";
import "../styles/login.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [saveId, setSaveId] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !password) {
      alert("아이디와 비밀번호를 입력해주세요!!!.");
      return;
    }

    axios
      .post(
        "http://localhost:8080/test/users2",
        {
          id: "user1",
          password: "password123",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const userData = parseUserString(response.data);

        // 파싱된 데이터 활용
        console.log("사용자 ID:", userData.id);
        console.log("이름:", userData.name);

        alert("success.");

        navigate('/member2',{
          state:{
            userId: userData.id,
            userName: userData.name,
            userData: userData
          }

        })

        // DOM 업데이트
        // document.getElementById(
        //   "welcome"
        // ).innerHTML = `안녕하세요, ${userData.name}(${userData.id})님!`;
      })
      .catch((error) => {
        console.error("에러:", error);
        alert("로그인에 실패했습니다. 다시 시도해 주세요!");
      });
    // .then((response) =>
    //   console.log(
    //     response.data.id + response.data.passwd + response.data.name
    //   )
    // )
    // .catch((error) => console.error("Error:", error));
  };

  const handleSaveIdChange = () => {
    setSaveId(!saveId);
    console.log(
      !saveId
        ? "아이디 저장이 활성화되었습니다."
        : "아이디 저장이 비활성화되었습니다."
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
          {/* <span className="icon user-icon"></span> */}
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <span className="icon lock-icon"></span> */}
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

// 3. 문자열을 파싱하는 함수
function parseUserString(dataString) {
  // 개행문자 제거
  const cleanString = dataString.replace(/\n/g, "").trim();

  // 방법 1: 정규식을 사용한 파싱
  const parseWithRegex = (str) => {
    const idMatch = str.match(/ID:([^,]+)/);
    const passwdMatch = str.match(/PASSWD:([^,]+)/);
    const nameMatch = str.match(/NAME:(.+)/);

    return {
      id: idMatch ? idMatch[1].trim() : null,
      password: passwdMatch ? passwdMatch[1].trim() : null,
      name: nameMatch ? nameMatch[1].trim() : null,
    };
  };

  // 정규식 방법 사용 (더 안정적)
  return parseWithRegex(cleanString);
}
export default LoginPage;
