import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCourses, fetchUserEnrollments } from "./client";
import EnrollButtons from "./EnrollButtons";
import { setEnrollments } from "./reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  refreshCourses,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  refreshCourses: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [showEnroll, setShowEnroll] = useState(true);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const dispatch = useDispatch();
  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";

  const fetchEnrollments = async () => {
    const userEnrollments = await fetchUserEnrollments(currentUser._id);
    dispatch(setEnrollments(userEnrollments));
  };

  const fetchAllCoursesForStudents = async () => {
    const courses = await fetchAllCourses();
    setAllCourses(courses);
  };

  useEffect(() => {
    fetchEnrollments();
  }, [currentUser]);

  useEffect(() => {
    if (!showEnroll) {
      fetchAllCoursesForStudents();
    } else {
      refreshCourses();
    }
  }, [showEnroll]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isStudent && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowEnroll((prev) => !prev)}
        >
          {showEnroll ? "All Courses" : "Enrollments"}
        </button>
      )}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              id="wd-add-new-course-click"
              className="btn btn-primary float-end"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              id="wd-update-course-click"
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        {showEnroll ? "Published Courses" : "All Courses"} (
        {showEnroll ? courses.length : allCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(showEnroll ? courses : allCourses).map((course) => (
            <div
              key={course.id}
              className="wd-dashboard-course col"
              style={{ width: "270px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src={course.img || `/images/reactjs.jpg`}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                    {isFaculty && (
                      <>
                        <button
                          id="wd-delete-course-click"
                          className="btn btn-danger float-end"
                          onClick={(e) => {
                            e.preventDefault();
                            deleteCourse(course._id);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          className="btn btn-warning me-2 float-end"
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(course);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                    {isStudent && <EnrollButtons courseId={course._id} />}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
