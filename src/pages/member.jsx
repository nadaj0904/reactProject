import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/member.css";

const Member = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 로그인 페이지에서 전달받은 사용자 데이터
  const { userId, userName, userData } = location.state || {};

  // 로그인 정보가 없으면 로그인 페이지로 리다이렉트
  if (!userId) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      navigate('/login');
    }
  };

  return (
    <div className="member-container">
      <header className="member-header">
        <h1>회원 페이지</h1>
        <button onClick={handleLogout} className="logout-btn">
          로그아웃
        </button>
      </header>
      
      <main className="member-content">
        <div className="welcome-section">
          <h2>안녕하세요, {userName}({userId})님!</h2>
          <p>회원 페이지에 오신 것을 환영합니다.</p>
        </div>

        <div className="user-info">
          <h3>사용자 정보</h3>
          <div className="info-item">
            <strong>사용자 ID:</strong> {userId}
          </div>
          <div className="info-item">
            <strong>이름:</strong> {userName}
          </div>
          {/* 추가 사용자 정보가 있다면 여기에 표시 */}
          {userData && Object.keys(userData).map((key) => (
            key !== 'id' && key !== 'name' && (
              <div key={key} className="info-item">
                <strong>{key}:</strong> {userData[key]}
              </div>
            )
          ))}
        </div>

        <div className="member-actions">
          <h3>이용 가능한 서비스</h3>
          <div className="action-buttons">
            <button className="action-btn">내 정보 수정</button>
            <button className="action-btn">주문 내역</button>
            <button className="action-btn">설정</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Member;