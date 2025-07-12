import React from "react";
import "./styel/index_kong.css";
import "./style/board3.css";
import "./style/opinion.css";

const opinion2 = () => {
  return (
    <div>
      {/* 헤더 */}
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

      {/* 네비게이션 경로 표시 */}
      <section className="breadcrumb">
        <div className="breadcrumb-container">
          <a href="/">홈</a> &gt; <a href="#history">위의록</a> &gt; 회의록
          게시판
        </div>
      </section>

      {/* 본문 */}
      <main>
        <div className="page-header2">
          <h1>건의사항</h1>
          <h2>공항교회 미래를 위해 건의사항을 주세요!!</h2>
        </div>

        <div className="suggestion-form">
          <form id="suggestionForm">
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="이름을 입력하세요"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력하세요 (선택사항)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">카테고리</label>
              <select id="category" name="category" required>
                <option value="">카테고리를 선택하세요</option>
                <option value="업무환경">업무환경</option>
                <option value="복리후생">복리후생</option>
                <option value="시설개선">시설개선</option>
                <option value="교육훈련">교육훈련</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="title">제목</label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="건의사항 제목을 입력하세요"
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">내용</label>
              <textarea
                id="content"
                name="content"
                required
                placeholder="건의사항 내용을 자세히 작성해주세요"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              건의사항 제출
            </button>
          </form>
        </div>
      </main>

      {/* 푸터 */}
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

export default opinion2;
