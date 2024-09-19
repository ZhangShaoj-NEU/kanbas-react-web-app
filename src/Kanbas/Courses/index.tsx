import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TOC from "./TOC";
import Home from './Home';
import Modules from './Modules';
import Assignments from './Assignments';
import AssignmentEditor from "./Assignments/Editor";

function Courses() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td style={{ width: '20%', verticalAlign: 'top', padding: '10px' }}>
            <h1>Course 1234</h1>
            <hr /> {/* 添加横线 */}
            <TOC />
          </td>
          <td style={{ width: '80%', verticalAlign: 'top', padding: '50px' }}> {/* 扩大 Assignment 列的宽度 */}
            <Routes>
              {/* 默认跳转到 Home */}
              <Route path="/" element={<Navigate to="Home" />} />
              {/* 其他路由 */}
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path=":courseId/Assignments/:aid" element={<AssignmentEditor />} />
            </Routes>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Courses;
