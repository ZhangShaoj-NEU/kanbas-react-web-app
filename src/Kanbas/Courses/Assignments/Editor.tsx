import { Link, useNavigate, useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const currentAssignment = assignments.find(
        (assignment: any) => assignment._id === aid
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [assignmentId, setAssignmentId] = useState(currentAssignment?._id || "");
    const [title, setTitle] = useState(currentAssignment?.title || "");
    const [description, setDescription] = useState(
        currentAssignment?.description ||
        `The assignment is available online.\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include:\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kanbas application\n- Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`
    );
    const [points, setPoints] = useState(currentAssignment?.points || "");
    const [availableFrom, setAvailableFrom] = useState(currentAssignment?.from || "2024-05-01");
    const [availableTo, setAvailableTo] = useState(currentAssignment?.to || "2024-05-15");
    const [dueDate, setDueDate] = useState(currentAssignment?.due || "2024-05-16");

    const handleSaveOrUpdate = () => {
        const assignmentData = {
            _id: assignmentId || "",
            title,
            course: cid,
            description,
            points,
            from: availableFrom,
            to: availableTo,
            due: dueDate
        };

        if (currentAssignment) {
            dispatch(updateAssignment(assignmentData));
        } else {
            dispatch(addAssignment(assignmentData));
        }

        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container">
            <div id="assignment-editor-container">
                <label htmlFor="assignment-name">Assignment Name</label><br />
                <input
                    id="assignment-name"
                    value={title}
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Assignment Name"
                />
                <br />

                <label htmlFor="assignment-id">Assignment ID</label><br />
                <input
                    id="assignment-id"
                    value={assignmentId}
                    className="form-control"
                    onChange={(e) => setAssignmentId(e.target.value)}
                    placeholder="Assignment ID"
                />
                <br />

                <textarea
                    id="assignment-description"
                    value={description}
                    className="form-control"
                    style={{ width: "100%", height: "300px" }}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <div className="mt-4">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <label htmlFor="assignment-points" className="form-label">Points</label>
                        </div>
                        <div className="col-md-10 col-12 d-flex align-items-center position-relative">
                            <input
                                id="assignment-points"
                                value={points}
                                className="form-control"
                                onChange={(e) => setPoints(e.target.value)}
                                placeholder="Points"
                            />
                            <FaChevronDown className="position-absolute" style={{ right: '30px' }} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-2 col-12">
                            <label htmlFor="assignment-group" className="form-label">Assignment Group</label>
                        </div>
                        <div className="col-md-10 col-12 d-flex align-items-center position-relative">
                            <select id="assignment-group" className="form-control w-100">
                                <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                            </select>
                            <FaChevronDown className="position-absolute" style={{ right: '30px' }} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-2 col-12">
                            <label htmlFor="grade-display" className="form-label">Display Grade as</label>
                        </div>
                        <div className="col-md-10 col-12 d-flex align-items-center position-relative">
                            <select id="grade-display" className="form-control">
                                <option value="PERCENTAGE" selected>Percentage</option>
                                <option value="NUMBERS">Numbers</option>
                            </select>
                            <FaChevronDown className="position-absolute" style={{ right: '30px' }} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-2 col-12">
                            <label htmlFor="submission-type" className="form-label">Submission Type</label>
                        </div>
                        <div className="col-md-10 col-12">
                            <select id="submission-type" className="form-control">
                                <option value="ONLINE" selected>Online</option>
                                <option value="INPERSON">In Person</option>
                            </select>
                            <FaChevronDown className="position-absolute" style={{ right: '18px', top: '50%', transform: 'translateY(-50%)' }} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-2 col-12">
                            <label htmlFor="assignment-availability" className="form-label">Assign To</label>
                        </div>
                        <div className="col-md-10 col-12 p-3 border rounded">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="due-date"><b>Due</b></label>
                                <input
                                    id="due-date"
                                    value={dueDate}
                                    type="date"
                                    className="form-control"
                                    onChange={(e) => setDueDate(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="available-from"><b>Available from</b></label>
                                <input
                                    id="available-from"
                                    value={availableFrom}
                                    type="date"
                                    className="form-control"
                                    onChange={(e) => setAvailableFrom(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="available-to"><b>Until</b></label>
                                <input
                                    id="available-to"
                                    value={availableTo}
                                    type="date"
                                    className="form-control"
                                    onChange={(e) => setAvailableTo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <button
                    className="btn btn-md btn-secondary me-1 float-end"
                    onClick={handleSaveOrUpdate}
                >
                    Save
                </button>
                <Link
                    to={`/Kanbas/Courses/${cid}/Assignments`}
                    className="btn btn-md btn-danger me-1 float-end"
                >
                    Cancel
                </Link>
            </div>
        </div>
    );
}
