// src/App.jsx
import React, { useEffect } from "react";
// import React from "react";
import "../styles/index_kong.css";
import "../styles/page5.css";

import { Routes, Route, Link } from "react-router-dom";
import kong_01_360 from "../assets/images/kong_01_360.png";

import Index from "./index.jsx";
import Board from "./board3.jsx";
import History from "./history.jsx";
import Opinion from "./opinion2.jsx";

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/board" element={<Board />} />
        <Route path="/history" element={<History />} />
        <Route path="/opinion" element={<Opinion />} />
      </Routes> */}

      <div className="app-wrapper">
        <header>
          <div className="header-container">
            <a href="#home">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/c2aa825bb765483a882a74291aecba2d/53b5cf9fce830460926805336d262b066d42c6f2?placeholderIfAbsent=true"
                alt="공항교회 로고"
                className="logo"
              />
            </a>
            <div className="logo2">[공항교회 미래 준비 위원회]</div>
            <nav>
              <ul>
                <li>
                  <Link to={"/"}>공미준 소개</Link>
                </li>
                <li>
                  <a href="#activities">공미준 조직도</a>
                </li>
                <li>
                  <Link to={"/opinion"}>건의사항</Link>
                </li>
                <li>
                  <Link to={"/board"}>회의록</Link>
                </li>
                <li>
                  <Link to={"/history"}>공미준 활동내역</Link>
                </li>
                <li>
                  <a href="#contact">미래제안서</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="hero2" id="home">
          <div className="hero-content">
            <h1>공항교회의 미래를 준비하는 공동체</h1>
            <p>하나님의 사랑으로 함께 걸어가는 공항교회 미래준비 위원회</p>
          </div>
        </section>
        <main>
          <section id="activities">
            <h2 className="section-title">공미준 History(활동내역)</h2>
            {/* <p style="text-align: center; margin-bottom: 2rem; color: #666">
              from 2023-02-04
            </p> */}

            <p
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                color: "#666",
              }}
            ></p>

            <div className="activities-grid">
              <article className="activity-card">
                <img src={kong_01_360} />
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

        <footer>
          <div className="footer-content">
            <p>
              (07616) 서울시 강서구 초원로 80 공항교회 TEL. 02)2665-9700~3 FAX.
              02)2665-2698
            </p>
            <p style={{ marginTop: "1rem", opacity: 0.8 }}>
              © 2025 공항교회 미래준비 위원회. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

useEffect(() => {
  // 부드러운 스크롤 효과
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // 카드 클릭 효과
  document.querySelectorAll(".activity-card").forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

  // 스크롤 시 헤더 효과
  const handleScroll = () => {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.backgroundColor = "white";
      header.style.backdropFilter = "none";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

export default App;
