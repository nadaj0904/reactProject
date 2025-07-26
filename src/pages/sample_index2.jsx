import React from "react";

const App = () => {
  // 메뉴 아이콘 클릭 시 알림
  const handleMenuClick = () => {
    alert("메뉴가 클릭되었습니다!");
  };

  // 메뉴 항목 클릭 시 알림
  const handleItemClick = (text) => {
    alert(`${text} 메뉴가 선택되었습니다.`);
  };

  // 메뉴 항목 목록
  const menuItems = [
    { text: "LIST", blueDot: false },
    { text: "로그인 페이지", blueDot: true },
    { text: "회원가입", blueDot: true },
    { text: "게시판", blueDot: true },
    { text: "테스트 01", blueDot: true },
    { text: "테스트 01", blueDot: true },
    { text: "테스트 01", blueDot: true },
  ];

  return (
    <div style={styles.body}>
      {/* 헤더 */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>React 개발 SAMPLE PAGE</h1>
        <div style={styles.menuIcon} onClick={handleMenuClick}>
          ☰
        </div>
      </div>

      {/* 메뉴 목록 */}
      <div style={styles.menuContainer}>
        <ul style={styles.menuList}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              style={{
                ...styles.menuItem,
                ...(item.blueDot ? styles.blueDotItem : {}),
              }}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.text);
                }}
                style={{
                  ...styles.menuLink,
                  ...(index === 0 ? styles.firstItem : {}),
                  ...(item.blueDot ? styles.blueDotLink : {}),
                }}
              >
                {item.blueDot && <span style={styles.dot}>•</span>}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 스타일 객체
const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#4682B4",
    color: "white",
    padding: "20px",
    position: "relative",
  },
  headerTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  },
  menuIcon: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "24px",
    cursor: "pointer",
  },
  menuContainer: {
    backgroundColor: "white",
    padding: 0,
    margin: 0,
  },
  menuList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  menuItem: {
    borderBottom: "1px solid #e0e0e0",
    marginLeft: "2%",
  },
  menuLink: {
    display: "block",
    padding: "15px 20px",
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  menuLinkHover: {
    backgroundColor: "#f0f0f0",
  },
  firstItem: {
    fontWeight: "bold",
    color: "#2c3e50",
  },
  blueDotItem: {},
  blueDotLink: {
    color: "#4682B4",
    paddingLeft: "25px",
    position: "relative",
  },
  dot: {
    color: "#4682B4",
    fontWeight: "bold",
    position: "absolute",
    left: "5px",
  },
};

export default App;
