import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TOC from "./TOC";
import Home from './Home';
import Modules from './Modules';
import Assignments from './Assignments';
import AssignmentEditor from "./Assignments/Editor";

function Courses() {
  return (
    <div id="wd-course">
        <h1>Course 1234</h1>
        <TOC />
      <Routes>
        {/* Default redirect to Home */}
        <Route path="/" element={<Navigate to="Home" />} />
        {/* Other routes */}
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Assignments" element={<Assignments />} />
        <Route path=":courseId/Assignments/:aid" element={<AssignmentEditor />} />
      </Routes>
    </div>
  );
}

export default Courses;
