import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Courses from "./Courses";
import TOC from "./TOC";

export default function Kanbas() {
    return (
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            {/* 第一列：Kanbas 全局导航 */}
            <td style={{ width: '10%', verticalAlign: 'top', padding: '10px' }}>
              <h1>Kanbas</h1>
              <TOC />
            </td>
            <td style={{ width: '90%', verticalAlign: 'top', padding: '50px' }}>
              <Routes>
                <Route path="/" element={<Navigate to="Courses" />} />
                <Route path="Courses/*" element={<Courses />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
  );}
  