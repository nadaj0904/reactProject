import React from 'react';
// import './App.css'; // CSS 파일 임포트
import "../styles/k_people.css";

// function App() {
const App = () => {
  return (
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
      <div className="content">
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
      </div>

      {/* 2012-2010 Content */}
      <div className="content">
        <div className="content-grid">
          <div className="content-item">
            <div className="highlight-text">
              2010-2012년 기반 구축 시기
            </div>
            <div className="content-text">
              조직의 체계적인 기반을 구축하고, 장기적인 비전을 설정하여 지속 가능한 활동을 위한 토대를 마련했습니다.
            </div>
          </div>
          <div className="content-item">
            <img src="https://via.placeholder.com/500x300/845ec2/white?text=2010-2012+조직+발전" alt="2010-2012" className="content-image" />
            <div className="content-text">
              • 조직 체계 정비<br />
              • 전문 인력 양성<br />
              • 네트워크 구축 및 확장
            </div>
          </div>
        </div>
      </div>

      {/* 2009-2006 Content */}
      <div className="content">
        <div className="content-grid">
          <div className="content-item">
            <div className="highlight-text">
              2006-2009년 성장과 발전
            </div>
            <div className="content-text">
              초기 활동을 바탕으로 규모를 확장하고, 다양한 분야로 활동 영역을 넓혀가며 사회적 영향력을 확대했습니다.
            </div>
          </div>
          <div className="content-item">
            <img src="https://via.placeholder.com/500x300/00c9a7/white?text=2006-2009+활동+확장" alt="2006-2009" className="content-image" />
            <div className="content-text">
              • 활동 영역 다각화<br />
              • 지역 사회와의 연계 강화<br />
              • 정책 제안 활동 시작
            </div>
          </div>
        </div>
      </div>

      {/* 2005-2002 Content */}
      <div className="content">
        <div className="content-grid">
          <div className="content-item">
            <div className="highlight-text">
              2002-2005년 창립과 초기 활동
            </div>
            <div className="content-text">
              창립 이후 초기 활동을 통해 조직의 정체성을 확립하고, 핵심 가치와 미션을 바탕으로 첫 발걸음을 내디뎠습니다.
            </div>
          </div>
          <div className="content-item">
            <img src="https://via.placeholder.com/500x300/845ec2/white?text=2002-2005+창립+초기" alt="2002-2005" className="content-image" />
            <div className="content-text">
              • 조직 창립 및 등록<br />
              • 핵심 가치 정립<br />
              • 초기 회원 모집 및 활동 시작
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;