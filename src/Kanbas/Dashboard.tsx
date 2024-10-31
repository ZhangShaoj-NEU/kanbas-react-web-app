import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import { createSlice } from "@reduxjs/toolkit";

// Initial data for courses and enrollments
import { enrollments as initialEnrollments, courses as initialCourses } from "./Database";

// Slice definition (moved from separate reducer file)
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState: {
        courses: initialCourses,
        enrollments: initialEnrollments,
    },
    reducers: {
        enrollCourse: (state, { payload: { courseId, currentUserId }}) => {
            const newEnrollment = {
                _id: new Date().getTime().toString(),
                course: courseId,
                user: currentUserId
            };
            if (!state.enrollments.some(e => e.course === courseId && e.user === currentUserId)) {
                state.enrollments = [
                    ...state.enrollments,
                    newEnrollment
                ];
                console.log("New enrollment added:", newEnrollment);
            }
        },
        unenrollCourse: (state, { payload: { courseId, currentUserId } }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => !(e.course === courseId && e.user === currentUserId)
            );
        }
    },
});

const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;

    const isFaculty = currentUser?.role === 'FACULTY';
    const isStudent = currentUser?.role === 'STUDENT';
    const dispatch = useDispatch();
    const [enrollmentsButton, setEnrollmentsButton] = useState(false);

    const toggleEnrollmentsButton = () => {
        setEnrollmentsButton(!enrollmentsButton);
    };

    

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            {isStudent && (
                <button className={`btn ${enrollmentsButton ? 'btn-secondary' : 'btn-primary'} float-end`}
                    id="wd-add-new-course-click"
                    onClick={toggleEnrollmentsButton}>
                    Enrollments
                </button>
            )}

            {isFaculty && (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}>
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <hr /><br />
                    <input
                        key={course._id || 'new'}
                        defaultValue={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        key={`${course._id}-desc`}
                        defaultValue={course.description}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <input
                        key={`${course._id}-number`}
                        defaultValue={course.number}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })}
                    />
                    <input
                        key={`${course._id}-id`}
                        defaultValue={course._id}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, _id: e.target.value })}
                    />
                    <input
                        key={`${course._id}-start`}
                        defaultValue={course.startDate}
                        className="form-control mb-2"
                        type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                    />
                    <input
                        key={`${course._id}-end`}
                        defaultValue={course.endDate}
                        className="form-control mb-2"
                        type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                    />
                </>
            )}

            <h2 id="wd-dashboard-published">Published Courses
                (
                {
                    (isFaculty ? courses.length : courses.filter((course) =>
                        enrollmentsButton ||
                        enrollments.some(
                            (enrollment: any) =>
                                enrollment.user === currentUser._id &&
                                enrollment.course === course._id
                        )
                    ).length)
                }
                )
            </h2>

            <hr />

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {(isFaculty ? courses : courses.filter((course) =>
                        enrollmentsButton ||
                        enrollments.some(
                            (enrollment: any) =>
                                enrollment.user === currentUser._id &&
                                enrollment.course === course._id
                        )
                    ))
                        .map((course) => {
                            const isEnrolled = enrollments.some(
                                (enrollment: any) =>
                                    enrollment.user === currentUser._id && enrollment.course === course._id
                            );

                            return (
                                <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                                    <div className="card rounded-3 overflow-hidden h-100">
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                            className="wd-dashboard-course-link text-decoration-none text-dark">
                                            <img alt="course-image" src={`/images/${course.image}`} width="100%" height={160} />
                                            <div className="card-body">
                                                <h5 className="wd-dashboard-course-title card-title">
                                                    {course.name}
                                                </h5>
                                                <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                    {course.description}
                                                </p>
                                                <button className="btn btn-primary"> Go </button>

                                                {!enrollmentsButton && isEnrolled && isStudent && (
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        dispatch(unenrollCourse({
                                                            courseId: course._id,
                                                            currentUserId: currentUser._id
                                                        }));
                                                    }} className="btn btn-danger float-end"
                                                        id="wd-enroll-course-click">
                                                        Unenroll
                                                    </button>
                                                )}

                                                {enrollmentsButton && !isEnrolled && isStudent && (
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        dispatch(enrollCourse({
                                                            courseId: course._id,
                                                            currentUserId: currentUser._id
                                                        }));
                                                    }} className="btn btn-success float-end"
                                                        id="wd-enroll-course-click">
                                                        Enroll
                                                    </button>
                                                )}

                                                {isFaculty && (
                                                    <>
                                                        <button onClick={(event) => {
                                                            event.preventDefault();
                                                            deleteCourse(course._id);
                                                        }} className="btn btn-danger float-end" id="wd-delete-course-click">
                                                            Delete
                                                        </button>
                                                        <button id="wd-edit-course-click" onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }} className="btn btn-warning me-2 float-end">
                                                            Edit
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
