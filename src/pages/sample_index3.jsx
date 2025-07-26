import React, { useState } from 'react';

// 메인 컴포넌트 정의
function App() {
  // useState 훅을 사용해서 상태 관리
  // menuVisible: 메뉴가 보이는지 안보이는지 상태
  const [menuVisible, setMenuVisible] = useState(true);

  // 햄버거 메뉴 클릭했을 때 실행되는 함수
  const handleMenuClick = () => {
    alert('메뉴가 클릭되었습니다!');
    // 메뉴 보이기/숨기기 토글
    setMenuVisible(!menuVisible);
  };

  // 메뉴 항목 클릭했을 때 실행되는 함수
  const handleMenuItemClick = (menuName) => {
    alert(menuName + ' 메뉴가 선택되었습니다.');
  };

  // 메뉴 데이터를 배열로 정의 (나중에 쉽게 수정 가능)
  const menuItems = [
    { name: 'LIST', hasBlueBot: false },
    { name: '로그인 페이지', hasBlueBot: true },
    { name: '회원가입', hasBlueBot: true },
    { name: '게시판', hasBlueBot: true },
    { name: '테스트 01', hasBlueBot: true },
    { name: '테스트 02', hasBlueBot: true },
    { name: '테스트 03', hasBlueBot: true }
  ];

  // JSX 반환 (HTML과 비슷하지만 React용)
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      
      {/* 헤더 부분 */}
      <div style={{
        backgroundColor: '#4682B4',
        color: 'white',
        padding: '20px',
        position: 'relative'
      }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
          React 개발 SAMPLE PAGE
        </h1>
        
        {/* 햄버거 메뉴 아이콘 */}
        <div 
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '24px',
            cursor: 'pointer'
          }}
          onClick={handleMenuClick}
        >
          ☰
        </div>
      </div>

      {/* 메뉴 영역 - menuVisible 상태에 따라 보이기/숨기기 */}
      {menuVisible && (
        <div style={{ backgroundColor: 'white', padding: 0, margin: 0 }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            
            {/* menuItems 배열을 map 함수로 반복해서 렌더링 */}
            {menuItems.map((item, index) => (
              <li 
                key={index} // React에서 리스트 렌더링할 때 필수
                style={{
                  marginLeft: '2%',
                  borderBottom: '1px solid #e0e0e0'
                }}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // 페이지 이동 방지
                    handleMenuItemClick(item.name);
                  }}
                  style={{
                    display: 'block',
                    padding: item.hasBlueBot ? '15px 20px 15px 25px' : '15px 20px',
                    textDecoration: 'none',
                    color: item.hasBlueBot ? '#4682B4' : (index === 0 ? '#2c3e50' : '#333'),
                    fontSize: '16px',
                    fontWeight: index === 0 ? 'bold' : 'normal',
                    position: 'relative',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f0f0f0';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {/* 파란색 점 표시 */}
                  {item.hasBlueBot && (
                    <span style={{
                      color: '#4682B4',
                      fontWeight: 'bold',
                      position: 'absolute',
                      left: '5px'
                    }}>
                      •
                    </span>
                  )}
                  {item.name}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
      )}
      
    </div>
  );
}

// 컴포넌트를 내보내기 (다른 곳에서 사용할 수 있게)
export default App;