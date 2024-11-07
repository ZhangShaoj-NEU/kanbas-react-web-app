import { FaPlus, FaSearch } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { MdDoNotDisturb } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssignmentToolbar() {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const isFacultyMember = currentUser?.role === 'FACULTY';

    return (
        <div id="assignment-toolbar" className="d-flex justify-content-between align-items-center">
            <div className="search-card card p-2" style={{ width: "300px", borderRadius: "8px" }}>
                <div className="position-relative">
                    <FaSearch
                        className="search-icon position-absolute fs-5"
                        style={{ left: "10px", top: "50%", transform: "translateY(-50%)", color: "#6c757d" }}
                    />
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search..."
                        style={{
                            fontSize: "20px",
                            paddingLeft: "40px",
                            border: "none",
                            boxShadow: "none",
                        }}
                    />
                </div>
            </div>

            <div>
                {isFacultyMember && (
                    <a
                        id="add-assignment-btn"
                        className="btn btn-lg btn-danger me-1 float-end"
                        href={`#/Kanbas/Courses/${cid}/Assignments/AddAssignment`}
                    >
                        <FaPlus className="icon-spacing me-2" />
                        Assignment
                    </a>
                )}

                <button id="add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <FaPlus className="icon-spacing me-2" />
                    Group
                </button>
            </div>
        </div>
    );
}
