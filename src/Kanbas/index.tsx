import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Courses from "./Courses";
import TOC from "./TOC";

export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <h1>Kanbas</h1>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Courses" />} />
          <Route path="Courses/*" element={<Courses />} />
        </Routes>
      </div>
  );}
  