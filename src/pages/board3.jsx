import React from "react";
import "./page5.css";
import "./board3.css";

const board3 = () => {
  return (
    <div>
      <header>
        <div className="header-container">
          <a href="index_kong.html">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/c2aa825bb765483a882a74291aecba2d/53b5cf9fce830460926805336d262b066d42c6f2?placeholderIfAbsent=true"
              alt="공항교회 로고"
              className="logo"
            />
          </a>
          <div className="logo2">공항교회 미래 준비 위원회</div>
          <nav>
            <ul>
              <li>
                <a href="index_kong.html">공미준 소개</a>
              </li>
              <li>
                <a href="org3.html">공미준 조직도</a>
              </li>
              <li>
                <a href="opinion2.html">건의사항</a>
              </li>
              <li>
                <a href="board3.html">회의록</a>
              </li>
              <li>
                <a href="history.html">공미준 활동내역</a>
              </li>
              <li>
                <a href="#contact">미래제안서</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="breadcrumb">
        <div className="breadcrumb-container">
          <a href="/">홈</a> &gt; <a href="#history">위의록</a> &gt; 회의록
          게시판
        </div>
      </section>

      <main>
        <div className="page-header2">
          <h1>공미준 회의록 게시판</h1>
          <p>공항교회 미래준비 위원회의 모든 회의록을 확인하실 수 있습니다</p>
        </div>

        {/* 검색 및 글쓰기 버튼 */}
        <div className="board-container">
          <div className="board-controls">
            <div className="search-form">
              <select>
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="writer">작성자</option>
                <option value="all">전체</option>
              </select>
              <input type="text" placeholder="검색어를 입력하세요" />
              <button type="submit">🔍 검색</button>
            </div>
            <button className="write-btn">✏️ 글쓰기</button>
          </div>

          {/* 게시판 테이블 */}
          <table className="board-table">
            <thead>
              <tr>
                <th className="post-number">번호</th>
                <th className="post-title">제목</th>
                <th className="post-meta">작성자</th>
                <th className="post-meta">작성일</th>
                <th className="post-views">조회</th>
              </tr>
            </thead>
            <tbody>
              <tr className="important-post">
                <td className="post-number">공지</td>
                <td className="post-title">
                  <a href="#">2025년 1분기 정기회의 일정 안내</a>
                  <span className="new-badge">NEW</span>
                </td>
                <td className="post-meta">위원장</td>
                <td className="post-meta">2025-06-14</td>
                <td className="post-views">128</td>
              </tr>
              {/* 여기에 다른 회의록 줄 추가 */}
            </tbody>
          </table>

          {/* 페이지네이션 */}
          <nav className="pagination" aria-label="페이지 내비게이션">
            <a href="#" className="disabled">
              « 이전
            </a>
            <span className="current">1</span>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">다음 »</a>
          </nav>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <p>
            (07616) 서울시 강서구 초원로 80 공창교회 TEL. 02)2665-9700~3 FAX.
            02)2665-2698
          </p>
          <p style={{ marginTop: "1rem", opacity: 0.8 }}>
            © 2025 공명교회 미래준비 위원회. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default board3;
