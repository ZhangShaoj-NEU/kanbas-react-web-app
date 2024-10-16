import React from 'react';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import TOC from "./TOC";
import Home from './Home';
import Modules from './Modules';
import Assignments from './Assignments';
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from './People/Table';
import { FaAlignJustify } from 'react-icons/fa';
import { courses } from "../Database";

function Courses() {
  const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find(
        (course) => course._id === cid
    );

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2> <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <TOC />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                        
                    </Routes>
                </div></div>
        </div >

    );
}

export default Courses;
