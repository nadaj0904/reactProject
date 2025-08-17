import React, { useEffect, useState } from "react";
import "../styles/index_kong.css";
import "../styles/k_people.css";

import kong_01_360 from "../assets/images/kong_01_360.png";

import { Link } from "react-router-dom";

const App = () => {
  // 현재 활성화된 탭을 관리하는 state
  const [activeTab, setActiveTab] = useState('kong2');
  
  // 탭 데이터
  const tabData = {
    'kong1': {
      title: '공미준1기(2022~2023)',
      yearDisplay: '2022 - 2023',
      content: (
        <div className="content-grid">
          <div className="content-item">
            <div className="highlight-text">
              2022-2023년 주요 성과와 발전사항
            </div>
            <div className="content-text">
              디지털 전환 시대에 맞춰 새로운 도약을 준비하며, 지속가능한 발전을 위한 기반을 마련했습니다. 혁신적인 프로젝트들과 파트너십을 통해 더 넓은 영향력을 확장해 나가고 있습니다.
            </div>
          </div>
          <div className="content-item">
            <img src="https://via.placeholder.com/500x300/845ec2/white?text=2022-2023+주요+활동" alt="2022-2023" className="content-image" />
            <div className="content-text">
              • 디지털 플랫폼 구축 완료<br />
              • 국제 협력 프로그램 확대<br />
              • 지속가능발전목표 달성을 위한 로드맵 수립
            </div>
          </div>
        </div>
      )
    },
    'kong2': {
      title: '공미준2기(2022~2023)',
      yearDisplay: '2017 - 2021',
      content: (
        <div className="content-grid">
          <div className="content-item">
            <img src="https://via.placeholder.com/500x300/00c9a7/white?text=시민운동+활동+현장" alt="시민운동 현장" className="content-image" />
            <div className="content-text">
              시민운동과 사회정의를 위한 다양한 활동을 전개하며, 투명하고 공정한 사회를 만들기 위해 노력했습니다. 시민들과 함께 목소리를 내며 변화를 이끌어냈습니다.
            </div>
          </div>
          <div className="content-item">
            <img src="https://via.placeholder.com/500x300/845ec2/white?text=추모+기념관+건립" alt="추모 기념관" className="content-image" />
            <div className="content-text">
              역사적 의미가 있는 추모 기념관 건립 프로젝트에 참여하여, 과거를 기억하고 미래 세대에게 올바른 역사 의식을 전달하는 데 기여했습니다.
            </div>
          </div>
        </div>
      )
    }
  };

  // 탭 클릭 핸들러
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    // 부드러운 스크롤 효과
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
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

  return (
    <>
      <header>
        <div className="header-container">
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/c2aa825bb765483a882a74291aecba2d/53b5cf9fce830460926805336d262b066d42c6f2?placeholderIfAbsent=true"
              alt="공항교회 로고"
              className="logo"
            />
          </Link>
          <div className="logo2">공항교회 미래 준비 위원회</div>
          <nav>
            <ul>
              <li><Link to="/kintro">공미준 소개</Link></li>
              <li><Link to="/kpeople">공미준 위원</Link></li>
              <li><Link to="/board">건의사항</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="header">
            <h1 className="title">공미준을 소개합니다</h1>
            <div className="breadcrumb">
              <span>🏠 홈</span>
              <span>&gt;</span>
              <span>소개</span>
              <span>&gt;</span>
              <span>걸어온길</span>
              <span>&gt;</span>
              <span className="active">{tabData[activeTab]?.yearDisplay}</span>
            </div>
          </div>

          <div className="tabs">
            {Object.entries(tabData).map(([tabId, data]) => (
              <button
                key={tabId}
                className={`tab ${activeTab === tabId ? 'active' : ''}`}
                onClick={() => handleTabClick(tabId)}
              >
                {data.title}
              </button>
            ))}
          </div>

          <div className="timeline-indicator">
            <div className="timeline-dot"></div>
            <div className="timeline-year" id="current-year">
              {tabData[activeTab]?.yearDisplay}
            </div>
          </div>

          {/* 활성 탭의 콘텐츠만 표시 */}
          <div className="content active">
            {tabData[activeTab]?.content}
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <p>
            (07616) 서울시 강서구 초원로 80 공항교회 TEL. 02)2665-9700~3 FAX.
            02)2665-2698
          </p>
          <p style={{marginTop: "1rem", opacity: 0.8}}>
            © 2025 공항교회 미래준비 위원회. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;