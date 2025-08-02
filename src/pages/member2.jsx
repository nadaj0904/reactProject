import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/member2.css";

const Member = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 로그인 페이지에서 전달받은 사용자 데이터
  const { userId, userName, userData } = location.state || {};

  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: userName || '',
    id: userId || '',
    birthDate: '',
    gender: '',
    email: '',
    confirmPassword: '',
    addressType: '',
    address: '',
    zipcode: '',
    addressDetail: '',
    addressPreference: 'address'
  });

  const [services, setServices] = useState({
    mail: false,
    email: false,
    sms: false
  });

  // 로그인 정보가 없으면 로그인 페이지로 리다이렉트
  if (!userId) {
    navigate('/login');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    setServices(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleAddressSearch = () => {
    alert('우편번호 검색 기능입니다.');
    // 실제로는 다음 우편번호 API 등을 연동
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('회원정보 수정:', formData);
    console.log('서비스 동의:', services);
    alert('회원정보가 수정되었습니다.');
  };

  const handleCancel = () => {
    if (window.confirm('수정을 취소하시겠습니까?')) {
      navigate('/login');
    }
  };

  return (
    <div className="member-container">
      <header className="member-header">
        <h1>회원정보 수정</h1>
      </header>
      
      <form onSubmit={handleSubmit} className="member-form">
        {/* 기본 입력 정보 */}
        <div className="form-section">
          <h3 className="section-title">
            <span className="section-number">1</span>
            기본 입력 정보
          </h3>
          
          <div className="form-table">
            <div className="form-row">
              <label className="form-label">이름</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            
            <div className="form-row">
              <label className="form-label">아이디</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                className="form-input"
                readOnly
              />
            </div>
            
            <div className="form-row">
              <label className="form-label">생년월일</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            
            <div className="form-row">
              <label className="form-label">성별</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            
            <div className="form-row">
              <label className="form-label">이메일</label>
              <div className="email-input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="예: example@domain.com"
                />
                <select className="email-domain">
                  <option value="">직접입력</option>
                  <option value="@gmail.com">@gmail.com</option>
                  <option value="@naver.com">@naver.com</option>
                  <option value="@daum.net">@daum.net</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <label className="form-label">확인암호</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            
            <div className="form-row">
              <label className="form-label">회사전화번호</label>
              <select
                name="addressType"
                value={formData.addressType}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">선택</option>
                <option value="02">02</option>
                <option value="031">031</option>
                <option value="032">032</option>
              </select>
              <span className="separator">-</span>
            </div>
          </div>
        </div>

        {/* 우편물 수령 시 연락처 */}
        <div className="form-section">
          <h3 className="section-title">
            <span className="section-number">2</span>
            우편물 수령 시 연락처
          </h3>
          
          <div className="form-table">
            <div className="form-row">
              <label className="form-label"></label>
              <button
                type="button"
                onClick={handleAddressSearch}
                className="address-search-btn"
              >
                우편번호찾기
              </button>
            </div>
            
            <div className="form-row">
              <label className="form-label">지번(도로) 주소</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="form-input"
                readOnly
              />
            </div>
            
            <div className="form-row">
              <label className="form-label">건물번호</label>
              <select
                name="zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">선택</option>
              </select>
              <span className="separator">-</span>
            </div>
            
            <div className="form-row">
              <label className="form-label">상세번호</label>
              <select
                name="addressDetail"
                value={formData.addressDetail}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">선택</option>
              </select>
              <span className="separator">-</span>
            </div>
            
            <div className="form-row">
              <label className="form-label">우편물 수령지</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="addressPreference"
                    value="address"
                    checked={formData.addressPreference === 'address'}
                    onChange={handleInputChange}
                  />
                  지금 ● 거주지
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 서비스 제공 */}
        <div className="form-section">
          <h3 className="section-title">
            <span className="section-number">3</span>
            서비스 제공
          </h3>
          
          <div className="form-table">
            <div className="form-row">
              <label className="form-label">우편</label>
              <div className="service-options">
                <label className="service-label">
                  <input
                    type="checkbox"
                    name="mail"
                    checked={services.mail}
                    onChange={handleServiceChange}
                  />
                  예 ● 아니오
                </label>
              </div>
            </div>
            
            <div className="form-row">
              <label className="form-label">이메일</label>
              <div className="service-options">
                <label className="service-label">
                  <input
                    type="checkbox"
                    name="email"
                    checked={services.email}
                    onChange={handleServiceChange}
                  />
                  예 ● 아니오
                </label>
              </div>
            </div>
            
            <div className="form-row">
              <label className="form-label">SMS</label>
              <div className="service-options">
                <label className="service-label">
                  <input
                    type="checkbox"
                    name="sms"
                    checked={services.sms}
                    onChange={handleServiceChange}
                  />
                  예 ● 아니오
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="button-area">
          <button type="submit" className="submit-btn">수정</button>
          <button type="button" onClick={handleCancel} className="cancel-btn">취소</button>
        </div>
      </form>
    </div>
  );
};

export default Member;