import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TOC from "./TOC";
import Home from './Home';
import Modules from './Modules';
import Assignments from './Assignments';
import AssignmentEditor from "./Assignments/Editor";

function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <TOC />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<h2>People</h2>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Courses;
