// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Index from "./pages/index";
import Index from "./pages/sample_index";
import Board from "./pages/board3";
import History from "./pages/history";
import Opinion from "./pages/opinion2";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/board" element={<Board />} />
        <Route path="/history" element={<History />} />
        <Route path="/opinion" element={<Opinion />} />
      </Routes>
    </>
  );
};

export default App;
