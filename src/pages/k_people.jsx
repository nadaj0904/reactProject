import React, { useEffect } from "react";
import "../styles/index_kong.css";
import "../styles/k_people.css";

import kong_01_360 from "../assets/images/kong_01_360.png";

import { Link } from "react-router-dom";

const App = () => {
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
          {/* <a href="#home"> */}
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/c2aa825bb765483a882a74291aecba2d/53b5cf9fce830460926805336d262b066d42c6f2?placeholderIfAbsent=true"
              alt="공항교회 로고"
              className="logo"
            />
            </Link>
          {/* </a> */}
          <div className="logo2">공항교회 미래 준비 위원회</div>
          <nav>
             <ul>
               <li><Link to="/kintro">공미준 소개</Link></li>
               <li><Link to="/kpeople">공미준 위원</Link></li>
              <li><Link to="/board">건의사항</Link></li>
              {/* <li><a href="#contact">미래제안서</a></li> */}
            </ul>
          </nav>
        </div>
      </header>

      {/* <section className="hero2" id="home">
        <div className="hero-content">
          <h1>공항교회의 미래를 준비하는 공동체</h1>
          <p>하나님의 사랑으로 함께 걸어가는 공항교회 미래준비 위원회</p>
        </div>
      </section> */}

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
          <span className="active">2017 - 2021</span>
        </div>
      </div>

      <div className="tabs">
        <button className="tab">공미준1기(2022~2023)</button>
        <button className="tab active">공미준2기(2022~2023)</button>
        {/*
        <button className="tab">2013 - 2016</button>
        <button className="tab">2012 - 2010</button>
        <button className="tab">2009 - 2006</button>
        <button className="tab">2005 - 2002</button>
        */}
      </div>

      <div className="timeline-indicator">
        <div className="timeline-dot"></div>
        <div className="timeline-year">2017 - 2021</div>
      </div>

      {/* 2022-2024 Content */}
      {/* 이 부분은 현재 비활성화되어 보이지 않습니다. */}
      <div className="content">
        <div className="content-grid">
          <div className="content-item">
            <div className="highlight-text">
              2022-2024년 주요 성과와 발전사항
            </div>
            <div className="content-text">
              디지털 전환 시대에 맞춰 새로운 도약을 준비하며, 지속가능한 발전을 위한 기반을 마련했습니다. 혁신적인 프로젝트들과 파트너십을 통해 더 넓은 영향력을 확장해 나가고 있습니다.
            </div>
          </div>
          <div className="content-item">
            <img src="https://via.placeholder.com/500x300/845ec2/white?text=2022-2024+주요+활동" alt="2022-2024" className="content-image" />
            <div className="content-text">
              • 디지털 플랫폼 구축 완료<br />
              • 국제 협력 프로그램 확대<br />
              • 지속가능발전목표 달성을 위한 로드맵 수립
            </div>
          </div>
        </div>
      </div>

      {/* 2017-2021 Content */}
      {/* 이 부분이 `active` 클래스가 적용되어 기본적으로 보입니다. */}
      <div className="content active">
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
      </div>

      {/* 2013-2016 Content */}
      {/* 이 부분은 비활성화되어 보이지 않습니다. */}
      {/* <div className="content">
        <div className="content-grid">
          <div className="content-item">
            <div className="highlight-text">
              2013-2016년 사회적 변화의 시기
            </div>
            <div className="content-text">
              사회적 이슈에 대한 적극적인 대응과 시민 의식 개선을 위한 다양한 캠페인을 진행했습니다. 교육과 인식 개선을 통해 사회 변화를 추진했습니다.
            </div>
          </div>
          <div className="content-item">
            <img src="https://via.placeholder.com/500x300/00c9a7/white?text=2013-2016+주요+캠페인" alt="2013-2016" className="content-image" />
            <div className="content-text">
              • 시민 교육 프로그램 확대<br />
              • 사회적 약자 지원 활동<br />
              • 환경 보호 캠페인 진행
            </div>
          </div>
        </div>
      </div> */}


      
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