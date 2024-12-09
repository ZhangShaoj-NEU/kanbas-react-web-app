import Account from "./Account"
import Courses from "./Courses"
import Dashboard from "./Dashboard"
import KanbasNavigation from "./Navigation"
import {Routes, Route, Navigate} from "react-router-dom"
import ProtectedRoute from "./Account/ProtectedRoute"
import { useState, useEffect} from "react";
import * as courseClient from "./Courses/client";
import * as db from "./Database"
import './style.css'
import { Provider, useSelector } from "react-redux"
import store from "./store"
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as client from "./Courses/client"
export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const refreshCourses = () => {
    fetchCourses();
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);
    const [course, setCourse] = useState<any>({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/reactjs.jpg",
      description: "New Description",
    });

    const addNewCourse = async () => {
      const newCourse = await userClient.createCourse(currentUser, course);
      setCourses([ ...courses, newCourse ]);
    };  
  
    const deleteCourse = async (courseId: string) => {
      const status = await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    };
  
  
    const updateCourse = async () => {
      await courseClient.updateCourse(course);
      setCourses(courses.map((c) => {
          if (c._id === course._id) { return course; }
          else { return c; }
      }));
    };
  
    return (
        <Provider store={store}>
          <Session>
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path='/' element={<Navigate to='/Kanbas/Account'/>}/>
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={
                          <ProtectedRoute>
                            <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                            refreshCourses={refreshCourses}/>
                          </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                        <Route path="/Calendar" element={<div>Calendar</div>} />
                        <Route path="/Inbox" element={<div>Inbox</div>} />
                    </Routes>
                </div>
            </div>
            </Session>
        </Provider>
    )
}
