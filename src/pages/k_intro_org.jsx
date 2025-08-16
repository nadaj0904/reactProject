import React from "react";
// import "./App.css";
import "../styles/k_intro.css";

// function k_intro() {
const k_intro = () => {  
  return (
    <div className="container">
      <header>
        <h1>공항교회 미래위원회</h1>
        <p className="subtitle">교회의 미래와 다음 세대를 위한 비전 개발</p>
      </header>

      {/* 설립 목적 */}
      <div className="section">
        <h2 className="section-title">🎯 설립 목적</h2>
        <div className="purpose-grid">
          <div className="purpose-item">
            <h3>비전 개발</h3>
            <p>교회의 미래 방향 설정과 전략 수립을 통해 다음 세대를 준비합니다.</p>
          </div>
          <div className="purpose-item">
            <h3>혁신 주도</h3>
            <p>급변하는 사회 속에서 교회가 시대적 요구에 부응하도록 변화를 이끕니다.</p>
          </div>
          <div className="purpose-item">
            <h3>소통 증진</h3>
            <p>리더들과 교인 간의 효과적인 소통으로 갈등을 줄이고 협력을 강화합니다.</p>
          </div>
          <div className="purpose-item">
            <h3>문화 조성</h3>
            <p>수평적 소통과 상호 존중을 바탕으로 건강한 교회 문화를 만듭니다.</p>
          </div>
          <div className="purpose-item">
            <h3>리더십 육성</h3>
            <p>차세대 리더들을 발굴하고 성장할 수 있도록 지원합니다.</p>
          </div>
          <div className="purpose-item">
            <h3>민주화</h3>
            <p>투명하고 민주적인 의사결정으로 권위적 구조를 완화합니다.</p>
          </div>
        </div>
      </div>

      {/* 설립 과정 */}
      <div className="section">
        <h2 className="section-title">📋 설립 과정</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>필요성 인식</h3>
              <p>기존 기획위원회 체계의 한계점을 분석하고 변화의 필요성을 제시합니다.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>위원 모집</h3>
              <p>공항교회 미래제안서를 통해 모든 부서에서 사역 리더들을 모집합니다.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>위원회 구성</h3>
              <p>각 부서와 직분의 리더들을 다양하게 선별하여 구성합니다.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>공식 발족</h3>
              <p>당회의 승인을 받은 후 위원회를 공식 발족하고 활동을 시작합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 위원회 성격 */}
      <div className="section">
        <h2 className="section-title">🏛️ 위원회 성격</h2>
        <div className="characteristics">
          <div className="characteristic-item">
            <h3>개방적 참여</h3>
            <p>모든 교인에게 참여 기회를 제공하는 열린 기구</p>
          </div>
          <div className="characteristic-item">
            <h3>미래 지향적</h3>
            <p>장기적인 비전 제시와 미래 준비에 집중</p>
          </div>
          <div className="characteristic-item">
            <h3>혁신 주도</h3>
            <p>새로운 시도를 통한 교회 혁신 추진</p>
          </div>
          <div className="characteristic-item">
            <h3>소통 중심</h3>
            <p>수평적 소통으로 공감대 형성과 협력 이끔</p>
          </div>
          <div className="characteristic-item">
            <h3>섬김의 리더십</h3>
            <p>권위적 자세를 지양하고 섬김으로 교회를 섬김</p>
          </div>
        </div>
      </div>

      {/* 주요 역할 */}
      <div className="section">
        <h2 className="section-title">⚡ 주요 역할</h2>
        <div className="roles">
          <div className="role-item">
            <h3>미래 전략 수립</h3>
            <p>교회의 장기적인 비전과 목표 설정 및 구체적인 실행 계획을 수립합니다.</p>
          </div>
          <div className="role-item">
            <h3>조언 및 자문</h3>
            <p>교회 운영과 관련된 주요 의사결정에 대해 전문적인 컨설팅을 제공합니다.</p>
          </div>
          <div className="role-item">
            <h3>혁신 과제 추진</h3>
            <p>교회 변화를 위한 구체적인 과제를 발굴하고 실행 계획을 수립합니다.</p>
          </div>
          <div className="role-item">
            <h3>사역 관리</h3>
            <p>다양한 프로젝트를 기획, 실행, 모니터링하며 체계적으로 관리합니다.</p>
          </div>
          <div className="role-item">
            <h3>차세대 육성</h3>
            <p>차세대 리더들을 발굴하고 훈련하여 교회의 미래를 준비합니다.</p>
          </div>
          <div className="role-item">
            <h3>전문성 강화</h3>
            <p>교회 개혁 전문가의 자문을 받아 위원회의 역량을 지속적으로 향상시킵니다.</p>
          </div>
        </div>
      </div>

      {/* 연락 및 참여 */}
      <div className="contact-section">
        <h2>함께 만들어가는 공항교회의 미래</h2>
        <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
          공항교회 미래위원회와 함께 교회의 새로운 비전을 그려나가시기 바랍니다.
          <br />
          <br />
          <strong>참여 문의: 공항교회 미래제안서 제출</strong>
        </p>
      </div>
    </div>
  );
}

export default k_intro;
