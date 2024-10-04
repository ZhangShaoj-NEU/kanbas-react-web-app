import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TOC from "./TOC";
import Home from './Home';
import Modules from './Modules';
import Assignments from './Assignments';
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from './People/Table';
import { FaAlignJustify } from 'react-icons/fa';

function Courses() {
  return (
    <div id="wd-courses">
        <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234 </h2> <hr />
        <div className="d-flex">
          <div className="d-none d-md-block">
            <TOC />
          </div>
          <div className="flex-fill"> 
          
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
        </div></div>
    </div>
  );
}

export default Courses;
