import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./TOC";
import Courses from "./Courses";
import "./styles.css";
import { useState } from "react";
import * as db from "./Database"
import { Provider } from "react-redux";
import store from "./store";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "RS123",
        name: "New Course",
        number: "RS1234",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "reactjs.webp",
        description: "New Description"
    });

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };

        setCourses([...courses, newCourse]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="Dashboard" element={
                            <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse} />
                            </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={<ProtectedRoute> <Courses courses={courses} /> </ProtectedRoute>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    )
}