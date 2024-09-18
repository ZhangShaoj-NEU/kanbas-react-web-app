import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Shaojie Zhang</h1>
      <h1>Labs</h1>
      {/* 显示目录 */}
      <TOC />

      {/* 定义内部的路由，处理不同的 Lab 页面 */}
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
    
);}
