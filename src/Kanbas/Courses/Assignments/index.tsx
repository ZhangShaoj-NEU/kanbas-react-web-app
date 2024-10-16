import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { GrNotes } from "react-icons/gr";
import AssignmentControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    const courseAssignments = assignments.filter(
        assignment => assignment.course === cid
    );

    const formatDate = (givenDate: any) => {
        const date = new Date(givenDate);

        if (isNaN(date.getTime())) {
            return 'Invalid Date';
        }

        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long'};

        return date.toLocaleDateString('en-GB', options);
    }

    return (
        <div id="wd-assignments">
            <AssignmentControls /><br /><br />

            <div>
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            <IoMdArrowDropdown className="me-2 fs-3" />
                            ASSIGNMENTS
                            <AssignmentControlButtons />
                        </div>

                        <ul className="wd-lessons list-group rounded-0">

                            {courseAssignments.map(assignment => {
                                return <li className="wd-lesson list-group-item p-3 ps-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <GrNotes className="me-3 fs-4" />
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-start">
                                            <div>
                                                <a href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`} className="text-dark">
                                                    <b>{assignment.title}</b>
                                                </a>
                                                <p className="mb-1">
                                                    <span className="text-danger">Multiple Modules</span> |
                                                    <span> {`Not available until ${formatDate(assignment.from)} at 12:00am`} | </span>
                                                </p>
                                                <p className="mb-0">
                                                    <span className="fw-bold">Due</span> {`${formatDate(assignment.to)}`} at 11:59pm | 100 pts
                                                </p>
                                            </div>
                                        </div>
                                        <LessonControlButtons />
                                    </div>
                                </li>
                            })}

                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}