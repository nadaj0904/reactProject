// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Index from "./pages/index";
import Index from "./pages/sample_index";
import Login from "./pages/login";
import Board from "./pages/board";
import Notice from "./pages/notice";
import MemberInsert from "./pages/memberInsert";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/memberInsert" element={<MemberInsert/>} />
        <Route path="/board" element={<Board/>} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </>
  );
};

export default App;
