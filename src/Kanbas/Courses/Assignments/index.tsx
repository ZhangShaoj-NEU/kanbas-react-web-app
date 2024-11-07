import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { GrNotes } from "react-icons/gr";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import AssignmentEditorDialog from "./AssignmentEditorDialog";
import { useState } from "react";

export default function AssignmentList() {
    const { cid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const dispatch = useDispatch();

    const [assignmentToDelete, setAssignmentToDelete] = useState(null);

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isUserFaculty = currentUser?.role === 'FACULTY';

    const filteredAssignments = assignments.filter(
        (assignment: any) => assignment.course === cid
    );

    const formatAssignmentDate = (dateString: any) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return 'Invalid Date';
        }

        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
        return date.toLocaleDateString('en-GB', options);
    };

    const triggerDeleteModal = (assignmentId: any) => {
        setAssignmentToDelete(assignmentId);
    };

    const confirmDelete = () => {
        if (assignmentToDelete) {
            dispatch(deleteAssignment(assignmentToDelete));
            setAssignmentToDelete(null);
        }
    };

    return (
        <div id="assignment-list">
            <AssignmentControls />
            <br /><br />

            <div>
                <ul className="module-list list-group rounded-0">
                    <li className="module-header list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="module-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            <IoMdArrowDropdown className="me-2 fs-3" />
                            ASSIGNMENTS
                            <AssignmentControlButtons />
                        </div>

                        <ul className="lesson-list list-group rounded-0">
                            {filteredAssignments.map((assignment: any) => (
                                <li key={assignment._id} className="lesson-item list-group-item p-3 ps-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <GrNotes className="me-3 fs-4" />
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-start">
                                            <div>
                                                {isUserFaculty ? (
                                                    <a href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`} className="text-dark">
                                                        <b>{assignment.title}</b>
                                                    </a>
                                                ) : (
                                                    <b>{assignment.title}</b>
                                                )}
                                                <p className="mb-1">
                                                    <span className="text-danger">Multiple Modules</span> | 
                                                    <span> {`Not available until ${formatAssignmentDate(assignment.from)} at 12:00 a.m.`} | </span>
                                                </p>
                                                <p className="mb-0">
                                                    <span className="fw-bold">Due</span> {`${formatAssignmentDate(assignment.due)}`} at 11:59 p.m. | {`${assignment.points}`} pts
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            {isUserFaculty && (
                                                <FaTrash
                                                    className="text-danger me-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#delete-assignment-modal"
                                                    onClick={() => triggerDeleteModal(assignment._id)}
                                                />
                                            )}
                                            <LessonControlButtons />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
            {isUserFaculty && (
                <AssignmentEditorDialog
                    onConfirm={confirmDelete}
                    onCancel={() => setAssignmentToDelete(null)}
                />
            )}
        </div>
    );
}
