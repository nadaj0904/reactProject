import React, { useEffect, useState } from 'react';
import '../styles/index_kong.css';
// import "../styles/k_intro.css";
import '../styles/k_opinion.css';

import { Link } from 'react-router-dom';

const App = () => {
  // useState를 컴포넌트 레벨로 이동
  const [formData, setFormData] = useState({
    category: '예배와 말씀',
    writer: '',
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `의견이 등록되었습니다!\n\n카테고리: ${formData.category}\n작성자: ${
        formData.writer || '익명'
      }\n제목: ${formData.title}\n내용: ${formData.content}`
    );
    setFormData({
      category: '예배와 말씀',
      writer: '',
      title: '',
      content: '',
    });
  };

  useEffect(() => {
    // 부드러운 스크롤 효과
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
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

    window.addEventListener('scroll', handleScroll);

    // cleanup 함수
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
              <li>
                <Link to="/kintro">공미준 소개</Link>
              </li>
              <li>
                <Link to="/kpeople">공미준 위원</Link>
              </li>
              <li>
                <Link to="/kopinion">건의사항</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="intro1">
          <p>
            이곳은 모든 성도님들의 목소리가 존중받는 공간입니다.
            <br />
            교회를 더 건강하고 아름답게 세워가기 위해 예배, 사역, 봉사, 시설,
            교육, 소통 등 교회 전반에 관한{' '}
            <strong>생각, 아이디어, 제안, 격려의 말</strong>을 자유롭게 나누어
            주세요.
          </p>
        </section>

        <section className="guidelines1">
          <h3>💡 글 작성 안내</h3>
          <ol>
            <li>하나님의 사랑 안에서 존중하는 마음으로 작성해주세요.</li>
            <li>구체적인 이유나 기대 효과를 함께 적어주시면 좋습니다.</li>
            <li>익명 또는 실명으로 작성 가능합니다.</li>
            <li>모든 의견은 목회자와 운영위원회가 성실히 검토합니다.</li>
          </ol>
          <p>
            <em>
              "그러므로 피차 권면하고 서로 덕을 세우기를 너희가 하는 것 같이
              하라" (살전 5:11)
            </em>
          </p>
        </section>

        <form onSubmit={handleSubmit}>
          <label htmlFor="category">카테고리</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="예배와 말씀">예배와 말씀</option>
            <option value="사역과 봉사">사역과 봉사</option>
            <option value="성도의 교제">성도의 교제</option>
            <option value="교육과 훈련">교육과 훈련</option>
            <option value="교회 환경">교회 환경</option>
            <option value="기타 제안">기타 제안</option>
          </select>

          <label htmlFor="writer">작성자 (익명 가능)</label>
          <input
            type="text"
            id="writer"
            name="writer"
            value={formData.writer}
            onChange={handleChange}
            placeholder="예: 홍길동 또는 익명"
          />

          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="제안 제목을 입력하세요"
          />

          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            rows="6"
            value={formData.content}
            onChange={handleChange}
            placeholder="자유롭게 의견을 작성해주세요"
          ></textarea>

          <button type="submit">의견 보내기</button>
        </form>
      </main>

      <footer>
        <div className="footer-content">
          <p>
            (07616) 서울시 강서구 초원로 80 공항교회 TEL. 02)2665-9700~3 FAX.
            02)2665-2698
          </p>
          <p style={{ marginTop: '1rem', opacity: 0.8 }}>
            © 2025 공항교회 미래준비 위원회. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;