import React from "react";
import "../styles/index_kong.css";

const history = () => {
  return (
    <div>
      {/* 헤더 영역 */}
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

      {/* 본문 영역 */}
      <main>
        <div className="page-header2">
          <h1>공미준 History (활동내역)</h1>
          <h2
            style={{ textAlign: "center", marginBottom: "0rem", color: "#666" }}
          >
            from 2023-02-04
          </h2>
        </div>

        {/* 활동 카드 영역 */}
        <section id="activities">
          <div className="activities-grid">
            <article className="activity-card">
              <div className="card-image1"></div>
              <div className="card-content">
                <h3 className="card-title">사역지원</h3>
                <p className="card-date">Ministry Focus</p>
              </div>
            </article>

            <article className="activity-card">
              <div className="card-image2"></div>
              <div className="card-content">
                <h3 className="card-title">1기 책출간</h3>
                <p className="card-date">First Publication</p>
              </div>
            </article>

            <article className="activity-card">
              <div className="card-image3"></div>
              <div className="card-content">
                <h3 className="card-title">미래제안서</h3>
                <p className="card-date">Future Proposal</p>
              </div>
            </article>

            <article className="activity-card">
              <div className="card-image4"></div>
              <div className="card-content">
                <h3 className="card-title">회의록</h3>
                <p className="card-date">Meeting Records</p>
              </div>
            </article>

            <article className="activity-card">
              <div className="card-image5"></div>
              <div className="card-content">
                <h3 className="card-title">미디어 선교</h3>
                <p className="card-date">Media Ministry</p>
              </div>
            </article>
          </div>
        </section>

        {/* 교회 연락처 영역 */}
        <section id="contact" className="contact-info">
          <h2 className="contact-title">공항교회 오시는 길</h2>
          <div className="contact-details">
            <div className="contact-item">
              <strong>주소</strong>
              <br />
              (07616) 서울시 강서구 초원로 80 공항교회
            </div>
            <div className="contact-item">
              <strong>전화</strong>
              <br />
              TEL. 02)2665-9700~3
            </div>
            <div className="contact-item">
              <strong>팩스</strong>
              <br />
              FAX. 02)2665-2698
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer>
        <div className="footer-content">
          <p>
            (07616) 서울시 강서구 초원로 80 공창교회 TEL. 02)2665-9700~3 FAX.
            02)2665-2698
          </p>
          <p style={{ marginTop: "1rem", opacity: 0.8 }}>
            © 2025 공항교회 미래준비 위원회. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default history;
