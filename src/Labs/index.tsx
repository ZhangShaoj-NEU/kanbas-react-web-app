import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import store from "./store";
import { Provider } from "react-redux";
export default function Labs() {
  const githubUrl = "https://github.com/ZhangShaoj-NEU/kanbas-react-web-app.git";

  return (
    <Provider store={store}>
      <div>
        <h1>Shaojie Zhang</h1>
        <p>GitHub URL: <a href={githubUrl} target="_blank" rel="noopener noreferrer">{githubUrl}</a></p>

        <h1>Labs</h1>
        {/* 显示目录 */}
        <TOC />

        {/* 定义内部的路由，处理不同的 Lab 页面 */}
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3" element={<Lab3 />} />
          <Route path="Lab4" element={<Lab4 />} />
          <Route path="Lab5" element={<Lab5 />} />
        </Routes>
      </div>
    </Provider>
    
    
);}
