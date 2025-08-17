// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Index from "./pages/index";
import Index from "./pages/index";
import Kintro from "./pages/k_intro";
import Kpeople from "./pages/k_people";
// import Login from "./pages/login";
// import Board from "./pages/board";
// import Notice from "./pages/notice";
// import MemberInsert from "./pages/memberInsert";
// import Member from "./pages/member";
// import Member2 from "./pages/member2";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        {<Route path="/kintro" element={<Kintro />} />}
        {<Route path="/kpeople" element={<Kpeople />} />}
        {/* { <Route path="/kintro" element={<Kintro />} /> }
        <Route path="/login" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/memberInsert" element={<MemberInsert/>} />
        <Route path="/board" element={<Board/>} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/member" element={<Member />} />
        <Route path="/member2" element={<Member2 />} /> */}
      </Routes>
    </>
  );
};

export default App;
