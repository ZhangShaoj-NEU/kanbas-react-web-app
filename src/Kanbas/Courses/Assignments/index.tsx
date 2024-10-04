import React from "react";
import { Link } from "react-router-dom";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";



export default function Assignments() {
  const courseId = 1234;

  return (
    <div>
      <AssignmentsControls /><br /><br /><br /><br />
      <div className="input-group mb-3" style={{ maxWidth: '300px' }}>
        <span className="input-group-text bg-white border-end-0">
          <BsSearch />
        </span>
        <input
          id="wd-search-assignment"
          type="text"
          className="form-control border-start-0"
          placeholder="Search for Assignments"
          aria-label="Search for Assignments"
        />
      </div>
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 40% of Total 
            <button className="btn btn-secondary ms-2">+</button>
            <ModuleControlButtons />
          </div>
          <ul className="wd-assignments-list list-group rounded-0">
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">
              <BsGripVertical className="me-2 fs-3" />
              <Link className="wd-assignment-link" to={`/Kanbas/Courses/${courseId}/Assignments/123`}>
                A1 - ENV + HTML
              </Link>
              <LessonControlButtons />
              <p>Multiple Modules | <strong>Not available until May 6 at 12:00am</strong> | Due May 13 at 11:59pm | 100 pts</p>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">
              <BsGripVertical className="me-2 fs-3" />
              <Link className="wd-assignment-link" to={`/Kanbas/Courses/${courseId}/Assignments/124`}>
                A2 - CSS + BOOTSTRAP
              </Link>
              <LessonControlButtons />
              <p>Multiple Modules | <strong>Not available until May 13 at 12:00am</strong> | Due May 20 at 11:59pm | 100 pts</p>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">
              <BsGripVertical className="me-2 fs-3" />
              <Link className="wd-assignment-link" to={`/Kanbas/Courses/${courseId}/Assignments/125`}>
                A3 - JAVASCRIPT + REACT
              </Link>
              <LessonControlButtons />
              <p>Multiple Modules | <strong>Not available until May 20 at 12:00am</strong> | Due May 27 at 11:59pm | 100 pts</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
