import React, { useState } from 'react';
import '../styles/k_people2.css';

// 회원 카드 컴포넌트입니다.
// activeTab props를 추가로 받아 테두리와 별 아이콘 색상을 결정합니다.
function MemberCard({ member, activeTab, onClick }) {
  // activeTab 값에 따라 색상 코드 결정
  const borderColor = activeTab === 'kong1' ? '#f39c12' : '#845ec2';
  const starColor = activeTab === 'kong1' ? '#f39c12' : '#845ec2';

  return (
    <div className="member-card" onClick={onClick}>
      {member.isStarred && (
        <div className="star-icon" style={{ backgroundColor: starColor }}>
          ★
        </div>
      )}

      {/* member.photoUrl이 있을 때만 img를 렌더링 */}
      {member.photoUrl ? (
        <img
          src={member.photoUrl}
          alt={member.name}
          className="member-photo"
          style={{ borderColor: borderColor }}
          // 사진 로딩 실패 시, 플레이스홀더를 보여주기 위해
          // src를 null로 설정하거나, 렌더링 로직을 다시 실행
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.querySelector(
              '.photo-placeholder'
            ).style.display = 'flex';
          }}
        />
      ) : (
        // photoUrl이 빈 문자열일 경우, 바로 플레이스홀더 렌더링
        <div
          className="photo-placeholder"
          style={{ borderColor: borderColor, display: 'flex' }}
        >
          사진
        </div>
      )}

      <div className="member-name">{member.name}</div>
      <div className="member-role">{member.role}</div>
      <div
        className="member-description"
        dangerouslySetInnerHTML={{ __html: member.description }}
      ></div>
    </div>
  );
}
// 메인 App 컴포넌트입니다.
const membersData = {
  kong1: [
    {
      name: '최종모',
      role: '위원장',
      description: '담임목사',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '추연철',
      role: '부위원장',
      description: '장로',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '이남창',
      role: '총무',
      description: '방송실,4남선교회 회장',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '홍유진 권사',
      role: '위원',
      description: '아동부 부장<br />속장',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '유순화',
      role: '위원',
      description: '아동부 교사<br/>',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '김화영',
      role: '위원',
      description: '아동부 교사',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '장현석',
      role: '위원',
      description: '청장년',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '곽창주',
      role: '위원',
      description: '청년부 부회장 역임',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '조세형',
      role: '위원',
      description: '청년부 부회장<br/>학생부 교사',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '이경림',
      role: '위원',
      description: '새가족 대표',
      photoUrl: '',
      isStarred: true,
    },
  ],

  kong2: [
    {
      name: '최종모',
      role: '위원장',
      description: '담임목사',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '김민준',
      role: '부위원장',
      description: '장로',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '이남창',
      role: '총무',
      description: '방송실,4남선교회 회장',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '홍유진 권사',
      role: '위원',
      description: '아동부 부장<br />속장',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '유순화',
      role: '위원',
      description: '아동부 교사<br/>',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '이재경',
      role: '위원',
      // description: '',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '신명화',
      role: '위원',
      description: '유치부 부장',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '조세형',
      role: '위원',
      description: '청년부 부회장<br/>학생부 교사',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '김진태',
      role: '위원',
      description: '금요찬양단',
      photoUrl: '',
      isStarred: true,
    },
    {
      name: '이근석',
      role: '위원',
      description: '금요찬양단<br/>성가대',
      photoUrl: '',
      isStarred: true,
    },
  ],
};

function App() {
  const [activeTab, setActiveTab] = useState('kong2');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // 클릭 시 실행할 함수를 정의합니다.
  const handleCardClick = (member) => {
    alert(
      `이름: ${member.role}\n직책: ${member.name}\n설명: ${member.description}`
    );
    console.log(member);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">공미준 위원을 소개합니다</h1>
        <div className="title-underline"></div>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'kong1' ? 'active' : ''}`}
          onClick={() => handleTabClick('kong1')}
        >
          공미준1기(2022~2023)
        </button>
        <button
          className={`tab ${activeTab === 'kong2' ? 'active' : ''}`}
          onClick={() => handleTabClick('kong2')}
        >
          공미준2기(2022~2023)
        </button>
      </div>

      <div className="content active">
        <div className="container">
          <div className="members-grid">
            {membersData[activeTab].map((member, index) => (
              <MemberCard
                key={index}
                member={member}
                activeTab={activeTab} // activeTab 상태를 props로 전달
                // 이 부분에 onClick 함수를 props로 전달합니다.
                onClick={() => handleCardClick(member)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
